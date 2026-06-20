import { useEffect, useRef, useState } from "react";

const NominatimBase = "https://nominatim.openstreetmap.org/search";

const SearchBox = () => {
  // Loading location state
  const [loadingQuery, setLoadingQuery] = useState("");
  const [loadingResults, setLoadingResults] = useState([]);
  const [loadingPlace, setLoadingPlace] = useState(null);
  const [loadingLoading, setLoadingLoading] = useState(false);
  const [loadingError, setLoadingError] = useState("");
  const loadingDebounceRef = useRef(null);
  const loadingAbortRef = useRef(null);

  // Unloading location state
  const [unloadingQuery, setUnloadingQuery] = useState("");
  const [unloadingResults, setUnloadingResults] = useState([]);
  const [unloadingPlace, setUnloadingPlace] = useState(null);
  const [unloadingLoading, setUnloadingLoading] = useState(false);
  const [unloadingError, setUnloadingError] = useState("");
  const unloadingDebounceRef = useRef(null);
  const unloadingAbortRef = useRef(null);

  // Form state
  const [truckType, setTruckType] = useState("");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const searchPlaces = async (searchText, setResults, setLoading, setError, abortRef) => {
    const trimmed = searchText.trim();

    if (trimmed.length < 2) {
      setResults([]);
      setError("");
      return;
    }

    if (abortRef.current) {
      abortRef.current.abort();
    }

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      setLoading(true);
      setError("");

      const url = new URL(NominatimBase);
      url.searchParams.set("format", "jsonv2");
      url.searchParams.set("q", trimmed);
      url.searchParams.set("countrycodes", "np");
      url.searchParams.set("limit", "6");
      url.searchParams.set("addressdetails", "1");
      url.searchParams.set("accept-language", "en");

      const response = await fetch(url.toString(), {
        signal: controller.signal,
        headers: {
          "Accept-Language": "en",
        },
      });

      if (!response.ok) {
        throw new Error("Search request failed");
      }

      const data = await response.json();
      setResults(Array.isArray(data) ? data : []);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError("Could not load place suggestions.");
        setResults([]);
      }
    } finally {
      setLoading(false);
    }
  };

  // Loading location debounce effect
  useEffect(() => {
    clearTimeout(loadingDebounceRef.current);

    if (!loadingQuery.trim()) {
      loadingDebounceRef.current = setTimeout(() => {
        setLoadingResults([]);
        setLoadingError("");
      }, 0);
      return;
    }

    loadingDebounceRef.current = setTimeout(() => {
      searchPlaces(loadingQuery, setLoadingResults, setLoadingLoading, setLoadingError, loadingAbortRef);
    }, 300);

    return () => clearTimeout(loadingDebounceRef.current);
  }, [loadingQuery]);

  // Unloading location debounce effect
  useEffect(() => {
    clearTimeout(unloadingDebounceRef.current);

    if (!unloadingQuery.trim()) {
      unloadingDebounceRef.current = setTimeout(() => {
        setUnloadingResults([]);
        setUnloadingError("");
      }, 0);
      return;
    }

    unloadingDebounceRef.current = setTimeout(() => {
      searchPlaces(unloadingQuery, setUnloadingResults, setUnloadingLoading, setUnloadingError, unloadingAbortRef);
    }, 300);

    return () => clearTimeout(unloadingDebounceRef.current);
  }, [unloadingQuery]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError("");

    // Validation
    if (!loadingPlace) {
      setFormError("Please select a loading location.");
      return;
    }

    if (!unloadingPlace) {
      setFormError("Please select an unloading location.");
      return;
    }

    if (!truckType) {
      setFormError("Please select a truck type.");
      return;
    }

    if (!date) {
      setFormError("Please select a date.");
      return;
    }

    // All validation passed
    setSubmitted(true);
  };

  const handleLoadingSelect = (place) => {
    setLoadingQuery(place.display_name || "");
    setLoadingPlace(place);
    setLoadingResults([]);
    setLoadingError("");
  };

  const handleUnloadingSelect = (place) => {
    setUnloadingQuery(place.display_name || "");
    setUnloadingPlace(place);
    setUnloadingResults([]);
    setUnloadingError("");
  };

  const handleReset = () => {
    setSubmitted(false);
    setLoadingPlace(null);
    setUnloadingPlace(null);
    setLoadingQuery("");
    setUnloadingQuery("");
    setTruckType("");
    setDate("");
    setFormError("");
  };

  return (
    <div className="flex flex-col bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 w-full max-w-sm shadow-lg relative">
      <h1 className="text-lg sm:text-xl font-bold p-2 sm:p-3">Need a truck?</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="relative">
          {/* Loading Location Input */}
          <div className="relative">
            <input
              className="bg-neutral-100 my-3 sm:my-5 mx-3 sm:mx-4 h-10 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] px-4 rounded-lg text-sm sm:text-base shadow-md shadow-emerald-300 outline-none"
              type="text"
              placeholder="Enter loading location..."
              value={loadingQuery}
              onChange={(e) => setLoadingQuery(e.target.value)}
            />

            {loadingLoading && (
              <p className="mx-3 sm:mx-4 -mt-2 text-xs sm:text-sm text-neutral-500">Searching...</p>
            )}

            {loadingError && (
              <p className="mx-3 sm:mx-4 -mt-2 text-xs sm:text-sm text-rose-600">{loadingError}</p>
            )}

            {loadingResults.length > 0 && (
              <ul className="absolute z-10 mx-3 sm:mx-4 mt-1 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-lg">
                {loadingResults.map((place) => (
                  <li key={place.place_id}>
                    <button
                      type="button"
                      onClick={() => handleLoadingSelect(place)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm hover:bg-emerald-50"
                    >
                      <div className="font-medium text-slate-800">
                        {place.display_name?.split(",")[0]}
                      </div>
                      <div className="text-xs sm:text-sm text-neutral-500">
                        {place.display_name}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Unloading Location Input */}
          <div className="relative">
            <input
              className="bg-neutral-100 my-3 sm:my-5 mx-3 sm:mx-4 h-10 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] px-4 rounded-lg text-sm sm:text-base shadow-md shadow-red-400 outline-none"
              type="text"
              placeholder="Enter unloading location..."
              value={unloadingQuery}
              onChange={(e) => setUnloadingQuery(e.target.value)}
            />

            {unloadingLoading && (
              <p className="mx-3 sm:mx-4 -mt-2 text-xs sm:text-sm text-neutral-500">Searching...</p>
            )}

            {unloadingError && (
              <p className="mx-3 sm:mx-4 -mt-2 text-xs sm:text-sm text-rose-600">{unloadingError}</p>
            )}

            {unloadingResults.length > 0 && (
              <ul className="absolute z-10 mx-3 sm:mx-4 mt-1 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-lg">
                {unloadingResults.map((place) => (
                  <li key={place.place_id}>
                    <button
                      type="button"
                      onClick={() => handleUnloadingSelect(place)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm hover:bg-emerald-50"
                    >
                      <div className="font-medium text-slate-800">
                        {place.display_name?.split(",")[0]}
                      </div>
                      <div className="text-xs sm:text-sm text-neutral-500">
                        {place.display_name}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex justify-between my-3 sm:my-5 mx-3 sm:mx-4 gap-2 sm:gap-4">
            <select
              className="bg-neutral-100 w-1/2 h-10 px-3 sm:px-0 rounded-lg text-sm sm:text-base shadow-md shadow-neutral-400 flex-1 border border-gray-300"
              value={truckType}
              onChange={(e) => setTruckType(e.target.value)}
            >
              <option value="">Select truck type</option>
              <option value="Pickup Truck">Pickup Truck</option>
              <option value="Box Truck">Box Truck</option>
              <option value="Flatbed Truck">Flatbed Truck</option>
            </select>
            <input
              className="bg-neutral-100 w-1/2 h-10 px-3 sm:px-2 rounded-lg text-sm sm:text-base shadow-md shadow-neutral-400 flex-1 outline-none border border-gray-300"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Select date"
            />
          </div>

          {formError && (
            <p className="mx-3 sm:mx-4 text-xs sm:text-sm text-rose-600 mb-4">{formError}</p>
          )}

          <button
            type="submit"
            className="bg-emerald-500 text-white mt-8 sm:mt-12 lg:mt-16 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] mx-3 sm:mx-4 py-2 sm:py-2 px-4 sm:px-8 text-sm sm:text-base rounded-lg shadow-md shadow-emerald-300 hover:shadow-emerald-400 hover:cursor-pointer transition duration-300"
          >
            Search
          </button>
        </form>
      ) : (
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="bg-emerald-50 p-4 sm:p-6 rounded-lg border-2 border-emerald-200">
            <h2 className="text-base sm:text-lg font-bold text-emerald-900 mb-4">Booking Details</h2>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold text-neutral-600">Loading Location</span>
                <span className="text-sm sm:text-base text-slate-800 wrap-break-word">
                  {loadingPlace?.display_name}
                </span>
                <span className="text-xs text-neutral-500">
                  Coordinates: {loadingPlace?.lat}, {loadingPlace?.lon}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold text-neutral-600">Unloading Location</span>
                <span className="text-sm sm:text-base text-slate-800 wrap-break-word">
                  {unloadingPlace?.display_name}
                </span>
                <span className="text-xs text-neutral-500">
                  Coordinates: {unloadingPlace?.lat}, {unloadingPlace?.lon}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold text-neutral-600">Truck Type</span>
                <span className="text-sm sm:text-base text-slate-800">{truckType}</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold text-neutral-600">Booking Date</span>
                <span className="text-sm sm:text-base text-slate-800">
                  {new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="bg-neutral-500 text-white py-2 px-4 text-sm sm:text-base rounded-lg shadow-md shadow-neutral-300 hover:shadow-neutral-400 hover:cursor-pointer transition duration-300 w-full"
          >
            Edit Booking
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBox;

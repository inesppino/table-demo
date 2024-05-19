import { useState, useEffect, useCallback } from "react";
import { Property, fetchAllProperties } from "../services/fetchAllProperties";

const useProperties = (sort: string, key: string) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProperties = useCallback(async () => {
    try {
      const options = key !== "" ? { key, order: sort } : undefined;
      const data = await fetchAllProperties(options);
      setProperties(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error("An unexpected error has occurred"));
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [key, sort]);

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  return {
    properties,
    loading,
    error,
    refetch: fetchProperties,
  };
};

export default useProperties;

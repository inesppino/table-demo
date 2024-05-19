import { useState, useEffect } from "react";
import { Property, fetchAllProperties } from "../services/fetchAllProperties";

const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProperties = async () => {
    try {
      const data = await fetchAllProperties();
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
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return { properties, loading, error, refetch: fetchProperties };
};

export default useProperties;

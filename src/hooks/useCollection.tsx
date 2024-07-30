import { useCallback, useEffect, useMemo, useState } from 'react';

import { CollectionItem } from '../modal/collection';
import { fetchCollectionApi } from '../api/collection';

const useCollection = () => {
  const [collection, setCollection] = useState<CollectionItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  const getCollection = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchCollectionApi();
      setCollection(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateCollection = (newCollection: CollectionItem) => {
    setCollection([...collection, newCollection]);
  };

  useEffect(() => {
    getCollection();
  }, []);

  return {
    data: collection,
    loading,
    isSuccess: !error,
    error,
    updateCollection,
  };
};

export default useCollection;

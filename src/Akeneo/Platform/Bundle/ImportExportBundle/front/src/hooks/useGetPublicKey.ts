import {useEffect, useState} from 'react';
import {useRoute} from '@akeneo-pim-community/shared';
import {SftpStorage} from '../components';

const useGetPublicKey = (storage: SftpStorage) => {
  const [publicKey, setPublicKey] = useState<boolean | undefined>(undefined);
  const route = useRoute('pimee_job_automation_get_public_key');

  useEffect(() => {
    const getPublicKey = async () => {
      const response = await fetch(route, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
      });

      const data = await response.json();

      setPublicKey(response.ok ? data : {});
    };

    void getPublicKey();
  }, [route, storage]);

  return {publicKey};
};

export {useGetPublicKey};

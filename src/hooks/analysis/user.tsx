import { useQuery } from '@tanstack/react-query';
import { BASE_URL_DEV, TOKEN_DEV, Data } from '../../constants';
import { GET_API } from '../../api';

interface UserData extends Data {
  result: { userDays: number };
}

const fetchUserAnalysis = async () => {
  return await GET_API(TOKEN_DEV, BASE_URL_DEV + '/statistics/user');
};

export const useUserAnalysis = () => {
  const { isPending, error, data } = useQuery<boolean, string, UserData>({
    queryKey: ['userAnalysis'],
    queryFn: fetchUserAnalysis,
  });
  return { isPending, error, data };
};

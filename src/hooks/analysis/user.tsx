import { useQuery } from '@tanstack/react-query';
import { BASE_URL_DEV, TOKEN_DEV, Data } from '../../constants';
import { GET_API } from '../../api';
import { Cookies } from 'react-cookie';

interface UserData extends Data {
  result: { userDays: number };
}

// const cookies = new Cookies();

// const fetchUserAnalysis = async () => {
//   if (cookies.get('jwt')) {
//     return await GET_API(cookies.get('jwt'), BASE_URL_DEV + '/statistics/user');
//   } else {
//     return console.log('error');
//   }
// };

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

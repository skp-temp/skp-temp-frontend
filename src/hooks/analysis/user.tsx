import { useSuspenseQuery } from '@tanstack/react-query';
import { BASE_URL_DEV, TOKEN_DEV, Data } from '../../constants';
import { GET_API } from '../../api';
import { Cookies } from 'react-cookie';

interface UserData extends Data {
  result: { userDays: number };
}

// const fetchUserAnalysis = async () => {
//   return await GET_API(
//     'Bearer ' + TOKEN_DEV,
//     BASE_URL_DEV + '/statistics/user',
//   );
// };

export const useUserAnalysis = () => {
  const cookies = new Cookies();

  const fetchUserAnalysis = async () => {
    if (cookies.get('jwt')) {
      return await GET_API('Bearer ' + cookies.get('jwt'), '/statistics/user');
    } else {
      return console.log('error');
    }
  };

  const { isPending, error, data } = useSuspenseQuery<
    boolean,
    string,
    UserData
  >({
    queryKey: ['userAnalysis'],
    queryFn: fetchUserAnalysis,
  });
  return { isPending, error, data };
};

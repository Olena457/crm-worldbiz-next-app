import { cache } from 'react';
import { QueryClient } from '@tanstack/react-query';

const getQueryClient = cache(() => new QueryClient()) as () => QueryClient;
export default getQueryClient;

// const fetchCompanies = async () => {
//   const response = await fetch('http://localhost:3002/companies');
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };

// const CompaniesPage = () => {
//   const { data, error, isLoading } = useQuery(['companies'], fetchCompanies);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       {data.map((company) => (
//         <div key={company.id}>
//           <h2>{company.title}</h2>
//           <p>{company.description}</p>
//           <p>Status: {company.status}</p>
//           <p>Joined Date: {company.joinedDate}</p>
//           <p>Country: {company.countryTitle}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CompaniesPage;

// 'use client';

// import React, { useEffect, useState } from 'react';

// interface CapsType {
//   [key: string]: {
//     [key: string]: {
//       LevelName: string;
//       Count: number;
//     };
//   };
// }

// const AthleteProfilePicture: React.FC = () => {
//   const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [age, setAge] = useState<number>();
//   const [fname, setName] = useState<string | null>(null);
//   const [lname, setLastName] = useState<string | null>(null);
//   const [cname, setCname] = useState<string | null>(null);
//   const [sname, setSname] = useState<string | null>(null);
//   const [dob, setDob] = useState<string | null>(null);
//   const [crank, setRank] = useState<number>();
//   const [brank, setBrank] = useState<number>();
//   const [bioFields, setBioFields] = useState<{ BioId: number; Title: string; Value: string }[]>([]);
//   const [caps, setCaps] = useState<CapsType | null>(null);

//   useEffect(() => {
//     const fetchProfilePicture = async () => {
//       try {
//         const response = await fetch('https://api.worldarchery.sport/v3/ATHLETEBIOGRAPHY/?Id=8179&Detailed=true');

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         const firstItem = data.items[0];

//         setName(firstItem.FName);
//         setLastName(firstItem.GName);
//         setCname(firstItem.CountryName);
//         setSname(firstItem.CountryShort);
//         setDob(firstItem.DoB);
//         setAge(firstItem.Age);
//         setRank(firstItem.WorldRankings.Current[0].Rnk);
//         setBrank(firstItem.WorldRankings.Best[0].Rnk);
//         setBioFields(firstItem.BioFields || []);
//         setCaps(firstItem.Caps || null);

//         console.log('Fetched Data:', data);

//         if (firstItem.ProfilePicture && firstItem.ProfilePicture.URL) {
//           setProfilePictureUrl(firstItem.ProfilePicture.URL);
//         } else {
//           setError('No profile picture URL found');
//         }
//       } catch (error: any) {
//         console.error('Error fetching data:', error.message);
//         setError('Error fetching data');
//       }
//     };

//     fetchProfilePicture();
//   }, []);

//   if (error) {
//     return <div className="error-message">{error}</div>;
//   }

//   if (!profilePictureUrl) {
//     return <div className="loading">Loading...</div>;
//   }

//   const isValidImageUrl = (url: string | null | undefined) => {
//     return typeof url === 'string' && url.startsWith('http');
//   };

//   return (
//     <div id="athlete-profile-picture">
//       {isValidImageUrl(profilePictureUrl) ? (
//         <img src={profilePictureUrl} alt="Profile Picture" className="profile-picture" />
//       ) : (
//         <p>No Profile Picture Available</p>
//       )}
//       <p>Name: {fname} {lname}</p>
//       <p>Age: {age}</p>
//       <p>Country Name: {cname}</p>
//       <p>Country Short Name: {sname}</p>
//       <p>DOB: {dob}</p>
//       <p>Rank: {crank}</p>
//       <p>Best Rank: {brank}</p>

//       <h1>Bio</h1>
//       <div>
//         {bioFields.length > 0 ? (
//           <ul>
//             {bioFields
//               .filter((field) => field.BioId > 4)
//               .map((field) => (
//                 <li key={field.BioId}>
//                   <strong>{field.Title}:</strong> {field.Value}
//                 </li>
//               ))}
//           </ul>
//         ) : (
//           <p>No bio information available.</p>
//         )}
//       </div>

//       <h2>Medals</h2>
//       <div>
//         {caps ? (
//           Object.keys(caps).map((categoryKey) => (
//             <div key={categoryKey}>
//               <h3>{categoryKey}</h3>
//               <ul>
//                 {Object.keys(caps[categoryKey]).map((levelKey) => (
//                   <li key={levelKey}>
//                     <strong>{caps[categoryKey][levelKey].LevelName}:</strong> {caps[categoryKey][levelKey].Count}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))
//         ) : (
//           <p>No medal information available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AthleteProfilePicture;



'use client';

import React, { useEffect, useState } from 'react';

interface CapsType {
  [key: string]: {
    [key: string]: {
      LevelName: string;
      Count: number;
    };
  };
}

const AthleteProfilePicture: React.FC = () => {
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [age, setAge] = useState<number>();
  const [fname, setName] = useState<string | null>(null);
  const [lname, setLastName] = useState<string | null>(null);
  const [cname, setCname] = useState<string | null>(null);
  const [sname, setSname] = useState<string | null>(null);
  const [dob, setDob] = useState<string | null>(null);
  const [NOC, setNOC] = useState<string | null>(null);
  const [crank, setRank] = useState<number>();
  const [brank, setBrank] = useState<number>();
  const [bioFields, setBioFields] = useState<{ BioId: number; Title: string; Value: string }[]>([]);
  const [caps, setCaps] = useState<CapsType | null>(null);

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const response = await fetch('https://api.worldarchery.sport/v3/ATHLETEBIOGRAPHY/?Id=22125&Detailed=true');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const firstItem = data.items[0];

        setName(firstItem.FName);
        setLastName(firstItem.GName);
        setCname(firstItem.CountryName);
        setSname(firstItem.CountryShort);
        setDob(firstItem.DoB);
        setAge(firstItem.Age);
        setRank(firstItem.WorldRankings.Current[0].Rnk);
        setBrank(firstItem.WorldRankings.Best[0].Rnk);
        setBioFields(firstItem.BioFields || []);
        setCaps(firstItem.Caps || null);
        setNOC(firstItem.NOC);

        console.log('Fetched Data:', data);

        if (firstItem.ProfilePicture && firstItem.ProfilePicture.URL) {
          setProfilePictureUrl(firstItem.ProfilePicture.URL);
        } else {
          setError('No profile picture URL found');
        }
      } catch (error: any) {
        console.error('Error fetching data:', error.message);
        setError('Error fetching data');
      }
    };

    fetchProfilePicture();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!profilePictureUrl) {
    return <div className="loading">Loading...</div>;
  }

  const isValidImageUrl = (url: string | null | undefined) => {
    return typeof url === 'string' && url.startsWith('http');
  };

  return (
    <div id="athlete-profile" className="flex items-center p-6 border border-gray-200 shadow-lg rounded-lg max-w-4xl mx-auto bg-white m-5">
  <div id="athlete-profile-picture" className="flex-shrink-0 mr-8">
    {isValidImageUrl(profilePictureUrl) ? (
      <img src={profilePictureUrl} alt="Profile Picture" className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-md object-cover" />
    ) : (
      <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center border-4 border-gray-400 text-gray-600">
        No Profile Picture Available
      </div>
    )}
  </div>
  <div className="flex flex-col justify-center text-start mx-auto">
  <h2 className="text-2xl font-bold mb-3 text-gray-900">{fname} {lname}</h2>
  
  <p className="flex items-center text-xl font-semibold mb-3 text-gray-800">
    <img src={`/Flags/${NOC}.gif`} alt="country flag" className="w-10 h-7 mr-2 rounded-md" />
    <span className="tracking-wide">{sname}</span>
  </p>

  <p className="text-lg mb-2 text-gray-700">
    <span className="font-semibold text-gray-900">Date of Birth:</span> {dob}
  </p>

  <p className="text-lg text-gray-700">
    <span className="font-semibold text-gray-900">Age:</span> {age}
  </p>
  </div>
</div>
  );
};

export default AthleteProfilePicture;



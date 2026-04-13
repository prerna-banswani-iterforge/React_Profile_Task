import ProfileCard from "./Components/ProfileCard";
import type { User } from "./Types/User";
import { useState } from "react";

const users: User[] = [
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Sibylle",
      last: "Penner",
    },
    location: {
      street: {
        number: 7407,
        name: "Wiesenstraße",
      },
      city: "Bensheim",
      state: "Hessen",
      country: "Germany",
      postcode: 47797,
      coordinates: {
        latitude: "-50.4894",
        longitude: "160.3629",
      },
      timezone: {
        offset: "+4:30",
        description: "Kabul",
      },
    },
    email: "sibylle.penner@example.com",
    login: {
      uuid: "da0abf16-68f8-4765-9b6c-5bbe3e4c8d14",
      username: "silvergoose749",
      password: "gerbil",
      salt: "G8ICAw1T",
      md5: "87b2a9e90d46c04a6a3da2f90ca8732c",
      sha1: "12d30389ff892165b8345478e3e513c0f4775664",
      sha256:
        "9ceb2a84298d7ebe4f6c2c35f8aedc6e83b9cd8317a1d8454619dbee24d7111b",
    },
    dob: {
      date: "1987-01-04T03:31:09.244Z",
      age: 39,
    },
    registered: {
      date: "2019-12-05T07:04:41.732Z",
      age: 6,
    },
    phone: "0937-5802005",
    cell: "0174-0926118",
    id: {
      name: "SVNR",
      value: "17 030187 P 531",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/22.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg",
    },
    nat: "DE",
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Isabelle",
      last: "Dunn",
    },
    location: {
      street: {
        number: 7762,
        name: "Park Lane",
      },
      city: "Wolverhampton",
      state: "Gwynedd County",
      country: "United Kingdom",
      postcode: "XB5 4RN",
      coordinates: {
        latitude: "-82.6465",
        longitude: "-150.3063",
      },
      timezone: {
        offset: "-12:00",
        description: "Eniwetok, Kwajalein",
      },
    },
    email: "isabelle.dunn@example.com",
    login: {
      uuid: "861f3a22-d311-47b6-b80c-9f797e6a92f7",
      username: "crazybear273",
      password: "duck",
      salt: "E5APKk9B",
      md5: "caf157d7d2ad6c45ad34555fdb14c34f",
      sha1: "af652028a681b09754a627735f0f580233b9e61a",
      sha256:
        "5f6273bc72b7d44415c68312d3bc17cecd3f318a316dde771fbfad14d6f09f1f",
    },
    dob: {
      date: "1999-03-17T04:06:47.721Z",
      age: 27,
    },
    registered: {
      date: "2018-08-20T07:29:19.009Z",
      age: 7,
    },
    phone: "0121 046 0874",
    cell: "07524 522690",
    id: {
      name: "NINO",
      value: "AA 03 07 33 X",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/0.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/0.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/0.jpg",
    },
    nat: "GB",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Oliver",
      last: "Harris",
    },
    location: {
      street: {
        number: 7591,
        name: "Simcoe St",
      },
      city: "Westport",
      state: "Ontario",
      country: "Canada",
      postcode: "S0A 1U6",
      coordinates: {
        latitude: "-33.4345",
        longitude: "-79.0596",
      },
      timezone: {
        offset: "-1:00",
        description: "Azores, Cape Verde Islands",
      },
    },
    email: "oliver.harris@example.com",
    login: {
      uuid: "03fd0b5f-03ad-43a6-b5a0-9e06e1b98fe3",
      username: "goldenelephant683",
      password: "newbie",
      salt: "mv4KSjpW",
      md5: "2a8c69fb3206fb8e9381cc4167f6d48d",
      sha1: "ed2802e65b0b2af8b8ee20ec85442b6386595364",
      sha256:
        "b3a60478db705598eca752ceb9fa215869c6867d85b06702ec94078f94314156",
    },
    dob: {
      date: "1948-09-18T01:15:34.306Z",
      age: 77,
    },
    registered: {
      date: "2005-04-29T21:18:42.704Z",
      age: 20,
    },
    phone: "N88 X43-6827",
    cell: "Q34 K62-6452",
    id: {
      name: "SIN",
      value: "939768289",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/72.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/72.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/72.jpg",
    },
    nat: "CA",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Tyrone",
      last: "Gomez",
    },
    location: {
      street: {
        number: 1195,
        name: "Depaul Dr",
      },
      city: "Moscow",
      state: "North Dakota",
      country: "United States",
      postcode: 53126,
      coordinates: {
        latitude: "15.1137",
        longitude: "72.5695",
      },
      timezone: {
        offset: "-10:00",
        description: "Hawaii",
      },
    },
    email: "tyrone.gomez@example.com",
    login: {
      uuid: "406a1ec7-6eeb-4eae-a43b-ccfb6975b280",
      username: "heavypeacock886",
      password: "lololo",
      salt: "z64Oqpz0",
      md5: "67fc9491592def613ae846d0699469b0",
      sha1: "2f017041d9750ce1c5822fc58088c387fdea1b99",
      sha256:
        "56fe6bbbaef50b91df1196a989835193dfb39a38ec4d2abfd47a25bfdb1e8827",
    },
    dob: {
      date: "1980-08-12T05:56:13.812Z",
      age: 45,
    },
    registered: {
      date: "2017-12-25T10:57:27.722Z",
      age: 8,
    },
    phone: "(351) 948-7630",
    cell: "(496) 341-5939",
    id: {
      name: "SSN",
      value: "298-03-5593",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/78.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/78.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/78.jpg",
    },
    nat: "US",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "بهاره",
      last: "حسینی",
    },
    location: {
      street: {
        number: 3539,
        name: "فلسطین",
      },
      city: "بندرعباس",
      state: "یزد",
      country: "Iran",
      postcode: 52038,
      coordinates: {
        latitude: "81.8338",
        longitude: "-172.2512",
      },
      timezone: {
        offset: "+7:00",
        description: "Bangkok, Hanoi, Jakarta",
      },
    },
    email: "bhrh.hsyny@example.com",
    login: {
      uuid: "96a987c4-76bc-4f30-8a75-32f1f79ee2fb",
      username: "goldengoose387",
      password: "tazz",
      salt: "ctaJIHDs",
      md5: "58af4bef99d6bbe5daa13c0580f7a305",
      sha1: "c3d9a7af97d73fc37c7a6258526c10ea46d9d672",
      sha256:
        "e976d90fa1c2a42c765e34b2524a2c1227c4a193e5832965f93aef1608640268",
    },
    dob: {
      date: "1986-12-08T11:25:23.956Z",
      age: 39,
    },
    registered: {
      date: "2020-04-21T22:06:54.978Z",
      age: 5,
    },
    phone: "018-25146535",
    cell: "0925-736-1920",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/9.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/9.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/9.jpg",
    },
    nat: "IR",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Giliam",
      last: "Veninga",
    },
    location: {
      street: {
        number: 1011,
        name: "Algemiene Wei",
      },
      city: "Toldijk",
      state: "Flevoland",
      country: "Netherlands",
      postcode: "2529 FV",
      coordinates: {
        latitude: "-3.9996",
        longitude: "1.8631",
      },
      timezone: {
        offset: "-10:00",
        description: "Hawaii",
      },
    },
    email: "giliam.veninga@example.com",
    login: {
      uuid: "9ab51d85-577b-4e40-b937-943ae1dbd85e",
      username: "sadladybug900",
      password: "hokies",
      salt: "Ibm4P5Bu",
      md5: "7fc4245fc5fec867e3e3da7490716f51",
      sha1: "7125e53a768f17887532e0e690f64b4fd4df9543",
      sha256:
        "8031259c87da4f1503b7e4714140446dfd618ee4380d1946847c7d23da5b2d45",
    },
    dob: {
      date: "1981-11-25T12:51:16.086Z",
      age: 44,
    },
    registered: {
      date: "2021-05-15T11:29:21.052Z",
      age: 4,
    },
    phone: "(0238) 146589",
    cell: "(06) 29791589",
    id: {
      name: "BSN",
      value: "42693194",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/18.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/18.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/18.jpg",
    },
    nat: "NL",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Esther",
      last: "Kiewiet",
    },
    location: {
      street: {
        number: 2013,
        name: "Kreekrakstraat",
      },
      city: "Baard",
      state: "Utrecht",
      country: "Netherlands",
      postcode: "5292 TJ",
      coordinates: {
        latitude: "-76.4515",
        longitude: "12.5157",
      },
      timezone: {
        offset: "-12:00",
        description: "Eniwetok, Kwajalein",
      },
    },
    email: "esther.kiewiet@example.com",
    login: {
      uuid: "69760080-d0b1-4b95-bf0f-1e940e6aef50",
      username: "lazycat390",
      password: "celine",
      salt: "1uZhfWrA",
      md5: "119c9484fd69bcc1432ce09a6a48c335",
      sha1: "a36b853363e03bc391a712960488add94478b47b",
      sha256:
        "ce62e9740604e32439011e8aa1c4fb881f402f27471554198a31a86999765145",
    },
    dob: {
      date: "1992-03-28T21:13:08.323Z",
      age: 34,
    },
    registered: {
      date: "2007-06-19T09:17:47.371Z",
      age: 18,
    },
    phone: "(076) 5622757",
    cell: "(06) 86784780",
    id: {
      name: "BSN",
      value: "43039629",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/75.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/75.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/75.jpg",
    },
    nat: "NL",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Niilo",
      last: "Niva",
    },
    location: {
      street: {
        number: 827,
        name: "Nordenskiöldinkatu",
      },
      city: "Mänttä",
      state: "North Karelia",
      country: "Finland",
      postcode: 77865,
      coordinates: {
        latitude: "-86.3551",
        longitude: "-170.9017",
      },
      timezone: {
        offset: "-1:00",
        description: "Azores, Cape Verde Islands",
      },
    },
    email: "niilo.niva@example.com",
    login: {
      uuid: "41b56e21-b66c-4dfa-b35e-9b24ca43a12b",
      username: "bluerabbit652",
      password: "gravity",
      salt: "wKG20IFi",
      md5: "cc44fc089f034ba87e7cba9913b5ba99",
      sha1: "ce20249130ff945d2432f6ebacfe9707cb1cbe14",
      sha256:
        "978a9476593ba58bf15b71a366684568f60df0ac7fce467eaa6534ad728f046c",
    },
    dob: {
      date: "1970-05-04T17:56:45.585Z",
      age: 55,
    },
    registered: {
      date: "2022-03-14T12:04:27.492Z",
      age: 4,
    },
    phone: "09-228-933",
    cell: "040-393-40-31",
    id: {
      name: "HETU",
      value: "NaNNA295undefined",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/90.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/90.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/90.jpg",
    },
    nat: "FI",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Same",
      last: "Barrett",
    },
    location: {
      street: {
        number: 7691,
        name: "North Road",
      },
      city: "Armagh",
      state: "Grampian",
      country: "United Kingdom",
      postcode: "QZ66 2FJ",
      coordinates: {
        latitude: "2.9504",
        longitude: "109.2268",
      },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    email: "same.barrett@example.com",
    login: {
      uuid: "ce749d4c-a666-4b39-b848-d6ce0db9d942",
      username: "happyzebra216",
      password: "wisdom",
      salt: "YDEinMjo",
      md5: "83278b069a70caeb2192eef867610aae",
      sha1: "ca42a43fcccb6183e60b438eb007a1f2b406bd1a",
      sha256:
        "ab86104de6e44b7f39135c02a18985cebc15f7174db2e6e5ab2a05bb55b7c00c",
    },
    dob: {
      date: "1967-11-13T23:03:10.341Z",
      age: 58,
    },
    registered: {
      date: "2019-12-26T01:56:17.590Z",
      age: 6,
    },
    phone: "026 1030 2904",
    cell: "07904 106052",
    id: {
      name: "NINO",
      value: "MW 32 89 47 X",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/92.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/92.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/92.jpg",
    },
    nat: "GB",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Ernest",
      last: "Fletcher",
    },
    location: {
      street: {
        number: 2269,
        name: "E North St",
      },
      city: "Great Falls",
      state: "Wyoming",
      country: "United States",
      postcode: 14030,
      coordinates: {
        latitude: "24.7019",
        longitude: "-49.6587",
      },
      timezone: {
        offset: "-7:00",
        description: "Mountain Time (US & Canada)",
      },
    },
    email: "ernest.fletcher@example.com",
    login: {
      uuid: "cf31ce78-5b6f-4921-84d4-dde47f197274",
      username: "heavygorilla141",
      password: "xyzzy",
      salt: "yJ2gOuna",
      md5: "6fdbf2d2070f0a7a227875e9db17aea4",
      sha1: "87bdad0cb954aa86348f51f7c62d7740cb6a9bd8",
      sha256:
        "6e2ab54c3ac6b4f03479d07497822c0fb843208b05df2585d8b984ed510dd312",
    },
    dob: {
      date: "1999-05-12T12:07:00.388Z",
      age: 26,
    },
    registered: {
      date: "2020-01-31T14:42:41.956Z",
      age: 6,
    },
    phone: "(907) 218-0521",
    cell: "(880) 294-3275",
    id: {
      name: "SSN",
      value: "082-57-5003",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/36.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/36.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/36.jpg",
    },
    nat: "US",
  },
];

export default function App() {
  const [count, setCount] = useState(0);
  const [profiles, setProfiles] = useState<User[]>(users);
  const [favourites, setFavourites] = useState<User[]>([]);

  function handleAddToFavourites(user: User): void {
    setProfiles((prev) => prev.filter((p) => p.login.uuid !== user.login.uuid));
    setFavourites((prev) => [...prev, user]);
  }

  function handleRemoveFromFavourites(user: User) {
    setFavourites((prev) =>
      prev.filter((p) => p.login.uuid !== user.login.uuid),
    );
    setProfiles((prev) => [...prev, user]);
  }

  const addCount = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // setCount(count + 1);
  };

  return (
    <div>
      {/* PROFILES SECTION  */}
      <div
        style={{
          textAlign: "center",
          padding: "20px 0 20px",
          color: "black",
          fontSize: "13px",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        Profiles · {profiles.length}
      </div>

      {profiles.map((user, index) => (
        <ProfileCard
          key={user.login.uuid}
          user={user}
          index={index}
          onAddToFavourites={handleAddToFavourites}
        />
      ))}

      {/* FAVOURITES SECTION  */}
      <div
        style={{
          textAlign: "center",
          padding: "20px 0 20px",
          color: "black",
          fontSize: "13px",
          letterSpacing: "2px",
        }}
      >
        Favourites · {favourites.length}
      </div>
      {favourites.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "60px 0",
            color: "#5a6a5a",
            fontSize: "14px",
          }}
        >
          No favourites yet
        </div>
      ) : (
        favourites.map((user, index) => (
          <ProfileCard
            key={user.login.uuid}
            user={user}
            index={index}
            onRemoveFromFavourites={handleRemoveFromFavourites}
          />
        ))
      )}

      {/* <div>{count}</div> */}

      {/* <button onClick={addCount}>Click me</button> */}
    </div>
  );
}

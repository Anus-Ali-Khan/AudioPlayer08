import {Track} from 'react-native-track-player';

export const playListData: Track[] = [
  {
    id: 1,
    title: 'Surah Yaseen',
    artist: 'Aaar Al Hudhoudi',
    album: 'Al-Quran',
    artwork:
      'https://i.pinimg.com/originals/12/4d/62/124d628966a5583cd7ac96dfd99c9a8d.jpg',
    url: require('./assets/surah_yaseen.mp3'),
  },
  {
    id: 2,
    title: 'Surah Rahman',
    artist: 'As-Sudais',
    album: 'Al-Quran',
    artwork:
      'https://img.freepik.com/premium-vector/islamic-calligraphy-surah-al-rahman_764982-1992.jpg',
    url: require('./assets/surah_rahman.mp3'),
  },
  {
    id: 3,
    title: 'Surah Mulk',
    artist: 'Mishary Rashid Alafasay',
    album: 'Al-Quran',
    artwork:
      'https://quranforkids.com/wp-content/uploads/2022/02/Surah-Al-Mulk-400x300-1.jpg',
    url: require('./assets/surah_mulk.mp3'),
  },
  {
    id: 4,
    title: 'Surah Al-Waqia',
    artist: 'Saad Al Gamidi',
    album: 'Al-Quran',
    artwork:
      'https://play-lh.googleusercontent.com/WRB-McWmJjIEvPRFsfZHMOFOx8KV7oYO9KpEK5fbTOMoUm1SpBhjCov9mbhi3XUm8hk',
    url: require('./assets/surah_waqia.mp3'),
  },
  {
    id: 5,
    title: 'Surah Ad-Duha',
    artist: 'Abdul Basit',
    album: 'Al-Quran',
    artwork: 'https://i.ytimg.com/vi/BQEtsFs0q8I/sddefault.jpg',
    url: require('./assets/surah_adduha.mp3'),
  },
];

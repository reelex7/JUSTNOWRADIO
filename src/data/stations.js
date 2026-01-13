export const categories = [
  { id: 'fm', name: 'FM Radio', icon: 'Radio' },
  { id: 'gospel', name: 'Gospel Radio', icon: 'Church' }, // Using closest Lucide icon notion
  { id: 'sports', name: 'Sports Radio', icon: 'Trophy' },
  { id: 'afrobeats', name: 'Afrobeats & Music', icon: 'Music' },
  { id: 'news', name: 'News Talk', icon: 'Newspaper' },
  { id: 'podcasts', name: 'Podcasts', icon: 'Mic' },
  { id: 'motivational', name: 'Motivational', icon: 'Zap' },
  { id: 'trending', name: 'Trending Stations', icon: 'TrendingUp' },
];

export const stations = [
  // FM Radio
  {
    id: 'cool-fm',
    name: 'Cool FM Lagos',
    category: 'fm',
    streamUrl: 'http://stream.coolfmlagos.com/live', // Note: Http streams might be mixed content issue on Https
    logo: 'https://placehold.co/400x400/0A0A23/FFFFFF?text=Cool+FM',
  },
  {
    id: 'wazobia-fm',
    name: 'Wazobia FM',
    category: 'fm',
    streamUrl: 'https://icecast.wazobiafm.com/lagos',
    logo: 'https://placehold.co/400x400/0A0A23/FFFFFF?text=Wazobia',
  },
  {
    id: 'nigeria-info',
    name: 'Nigeria Info FM',
    category: 'fm',
    streamUrl: 'https://icecast.nigeriainfo.fm/lagos',
    logo: 'https://placehold.co/400x400/0A0A23/FFFFFF?text=Nigeria+Info',
  },

  // Gospel
  {
    id: 'inspiration-fm',
    name: 'Inspiration FM',
    category: 'gospel',
    streamUrl: 'https://stream.inspirationfm.com/live',
    logo: 'https://placehold.co/400x400/0A0A23/FFFFFF?text=Inspiration',
  },
  {
    id: 'kingdom-radio',
    name: 'Kingdom Radio',
    category: 'gospel',
    streamUrl: 'https://stream.kingdomradio.org/live',
    logo: 'https://placehold.co/400x400/0A0A23/FFFFFF?text=Kingdom',
  },

  // Sports
  {
    id: 'brila-fm',
    name: 'Brila FM',
    category: 'sports',
    streamUrl: 'https://stream.brila.net/live',
    logo: 'https://placehold.co/400x400/FF2A00/FFFFFF?text=Brila',
  },

  // Afrobeats
  {
    id: 'city-fm',
    name: 'City FM',
    category: 'afrobeats',
    streamUrl: 'https://stream.cityfm.com/live',
    logo: 'https://placehold.co/400x400/0A0A23/FFFFFF?text=City+FM',
  },
  {
    id: 'soundcity',
    name: 'Soundcity Radio',
    category: 'afrobeats',
    streamUrl: 'https://soundcityradio.stream/live',
    logo: 'https://placehold.co/400x400/0A0A23/FFFFFF?text=Soundcity',
  },

  // Podcasts
  {
    id: 'smart-money',
    name: 'Smart Money Africa',
    category: 'podcasts',
    streamUrl: 'https://feeds.simplecast.com/smartmoney', // This is RSS, need to parse or find direct stream. Assuming direct for now or will handle RSS later.
    logo: 'https://placehold.co/400x400/FF2A00/FFFFFF?text=Smart+Money',
    isPodcast: true,
  },
  {
    id: 'tea-with-tay',
    name: 'Tea With Tay',
    category: 'podcasts',
    streamUrl: 'https://feeds.megaphone.fm/teawithtay',
    logo: 'https://placehold.co/400x400/FF2A00/FFFFFF?text=Tea+Tay',
    isPodcast: true,
  },
];

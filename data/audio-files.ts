// Audio files for bird song examples
// Indices correspond to batch indices in example_features.npy
export const AUDIO_FILES = [
  'EX1_Andean_Guan5.mp3',
  'EX2_Dwarf_Tinamou4.mp3',
  'EX3_North_Island_Brown_Kiwi8.mp3',
  'EX4_Andean_Tinamou16.mp3'
];

// Wrong prediction audio files for examples that were predicted incorrectly
// Maps batch index to the audio file of the wrongly predicted species
export const WRONG_PREDICTION_AUDIO: { [key: number]: string } = {
  2: 'WRONG_EX3.mp3',  // Bird Song C (EX3)
  3: 'WRONG_EX4.mp3'   // Bird Song D (EX4)
};

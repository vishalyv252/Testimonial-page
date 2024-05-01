/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Sora": ["Sora", "sans-serif"]
      },
      screens: {
        "Large_Tablet_Devices_Size_View": {"max": "769px", "min": "600px"},
        "Small_Tablet_Devices_Size_View": {"max": "600px", "min": "426px"},
        "Large_Mobile_Devices_Size_View": {"max": "426px", "min": "376px"},
        "Medium_Mobile_Devices_Size_View": {"max": "376px", "min": "321px"},
        "Small_Mobile_Devices_Size_View": {"max": "321px"}
      }
    },
  },
  plugins: [],
}


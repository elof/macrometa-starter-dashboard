import React, { memo } from "react"
import { Icon, useColorModeValue, useToken } from "@chakra-ui/react"

const Logotype = memo(({ ...rest }) => {
  const [gray800, primary300, primary500, white] = useToken("colors", [
    "gray.800", 
    "primary.300", 
    "primary.500", 
    "white"
  ])
  const starColor = useColorModeValue(primary500, primary300)
  const typeColor = useColorModeValue(gray800, white)
  return (
    <Icon h={7} viewBox="0 0 369 96" w="108px" {...rest}>
      <path d="M181.116 46.9103C187.39 46.9103 192.497 52.0179 192.497 58.2911C192.497 64.5643 187.39 69.6718 181.116 69.6718C174.843 69.6718 169.736 64.5643 169.736 58.2911C169.736 52.0179 174.843 46.9103 181.116 46.9103ZM181.116 39.3367C170.645 39.3367 162.155 47.8267 162.155 58.2978C162.155 68.7689 170.645 77.259 181.116 77.259C191.587 77.259 200.078 68.7689 200.078 58.2978C200.078 47.8267 191.587 39.3367 181.116 39.3367Z" fill={typeColor} />
      <path d="M0 77.0905V24.0478H9.47388L27.431 59.3624L45.3141 24.0478H54.7879V77.0905H46.756V37.9149L30.5373 69.5168H24.3247L8.0319 37.9958V77.0972H0V77.0905Z" fill={typeColor} />
      <path d="M74.0032 78C70.8228 78 68.1948 77.4677 66.1195 76.4098C64.0441 75.3519 62.5079 73.9504 61.4971 72.2052C60.4864 70.46 59.981 68.5531 59.981 66.4845C59.981 62.8459 61.3961 59.9687 64.2261 57.8462C67.0561 55.7237 71.099 54.6658 76.348 54.6658H86.1992V53.9852C86.1992 51.0541 85.4041 48.8575 83.8139 47.3953C82.2237 45.9331 80.1618 45.1987 77.635 45.1987C75.4114 45.1987 73.4775 45.7445 71.8402 46.8293C70.1961 47.9142 69.1989 49.5178 68.8485 51.6403H60.8166C61.0659 48.9114 61.989 46.5733 63.5859 44.6327C65.1761 42.6853 67.1976 41.1962 69.6503 40.1586C72.103 39.1209 74.7915 38.602 77.7226 38.602C82.9783 38.602 87.0414 39.9766 89.9253 42.7325C92.8025 45.4884 94.2445 49.2348 94.2445 53.9852V77.0971H87.2706L86.59 70.6554C85.5321 72.7308 83.9891 74.4692 81.9676 75.8842C79.9395 77.2925 77.2847 78 74.0032 78ZM75.5934 71.4842C77.7631 71.4842 79.5958 70.9654 81.0849 69.9277C82.574 68.89 83.7398 67.5154 84.5686 65.7972C85.4041 64.079 85.923 62.1856 86.1251 60.1169H77.1836C74.0032 60.1169 71.7391 60.6762 70.3982 61.7813C69.0573 62.8931 68.3902 64.2811 68.3902 65.9522C68.3902 67.6704 69.0371 69.018 70.3241 70.0085C71.6178 70.9923 73.3698 71.4842 75.5934 71.4842Z" fill={typeColor} />
      <path d="M117.447 78C113.761 78 110.46 77.1644 107.555 75.5001C104.651 73.8358 102.374 71.5246 100.736 68.5666C99.0923 65.6085 98.277 62.1923 98.277 58.2976C98.277 54.4097 99.0991 50.9867 100.736 48.0287C102.381 45.0706 104.651 42.7594 107.555 41.0951C110.46 39.4308 113.755 38.5953 117.447 38.5953C122.096 38.5953 125.998 39.8081 129.158 42.2339C132.311 44.6596 134.346 47.9411 135.256 52.085H126.847C126.341 50.0164 125.23 48.3993 123.511 47.2336C121.793 46.0746 119.772 45.4884 117.447 45.4884C115.48 45.4884 113.66 45.9803 111.989 46.9641C110.325 47.9478 108.984 49.3898 107.973 51.2832C106.962 53.1766 106.457 55.5148 106.457 58.2909C106.457 61.067 106.962 63.4051 107.973 65.2986C108.984 67.192 110.325 68.6474 111.989 69.6581C113.654 70.6689 115.473 71.1742 117.447 71.1742C119.772 71.1742 121.793 70.5948 123.511 69.4291C125.23 68.2701 126.341 66.626 126.847 64.5035H135.256C134.393 68.5464 132.379 71.8076 129.192 74.2805C126.011 76.7601 122.096 78 117.447 78Z" fill={typeColor} />
      <path d="M139.414 77.0905V39.5051H146.61L147.291 46.6274C148.604 44.1545 150.437 42.1937 152.782 40.7517C155.134 39.3097 157.971 38.5887 161.306 38.5887V46.998H159.109C156.886 46.998 154.905 47.3618 153.16 48.0963C151.414 48.8307 150.026 50.0638 148.989 51.809C147.951 53.5542 147.432 55.9664 147.432 59.0458V77.0838H139.414V77.0905Z" fill={typeColor} />
      <path d="M204.619 77.0903V39.5049H211.742L212.422 44.8078C213.635 42.8875 215.239 41.3714 217.233 40.2596C219.228 39.1478 221.539 38.5953 224.167 38.5953C230.13 38.5953 234.267 40.9469 236.592 45.6434C237.953 43.4737 239.786 41.7555 242.084 40.4887C244.381 39.2287 246.868 38.5953 249.549 38.5953C254.246 38.5953 257.932 40.0103 260.613 42.8403C263.288 45.6703 264.629 49.8884 264.629 55.4945V77.0903H256.598V56.3233C256.598 49.0461 253.821 45.4143 248.262 45.4143C245.432 45.4143 243.121 46.4722 241.329 48.5947C239.536 50.7172 238.64 53.7494 238.64 57.6912V77.0903H230.608V56.3233C230.608 49.0461 227.805 45.4143 222.199 45.4143C219.423 45.4143 217.132 46.4722 215.34 48.5947C213.547 50.7172 212.651 53.7494 212.651 57.6912V77.0903H204.619V77.0903Z" fill={typeColor} />
      <path d="M287.578 78C283.892 78 280.617 77.1779 277.767 75.5405C274.91 73.8964 272.68 71.6122 271.063 68.6811C269.446 65.75 268.637 62.3405 268.637 58.4526C268.637 54.5108 269.432 51.0541 271.022 48.0691C272.612 45.0908 274.836 42.7662 277.693 41.0951C280.55 39.4308 283.872 38.5953 287.659 38.5953C291.345 38.5953 294.552 39.4173 297.281 41.0547C300.01 42.6988 302.132 44.882 303.648 47.6109C305.164 50.3399 305.919 53.3451 305.919 56.6266C305.919 57.1319 305.906 57.6777 305.879 58.2572C305.852 58.8367 305.818 59.4835 305.764 60.191H276.514C276.763 63.8296 277.963 66.5923 280.112 68.4857C282.261 70.3791 284.748 71.3292 287.578 71.3292C289.849 71.3292 291.756 70.8104 293.299 69.7727C294.842 68.735 295.987 67.3335 296.749 65.5681H304.78C303.77 69.1056 301.762 72.0569 298.756 74.4355C295.751 76.8141 292.025 78 287.578 78ZM287.578 45.1852C284.903 45.1852 282.524 45.9803 280.456 47.5705C278.38 49.1607 277.12 51.546 276.669 54.7331H297.887C297.732 51.8021 296.701 49.4774 294.781 47.7592C292.854 46.0477 290.455 45.1852 287.578 45.1852Z" fill={typeColor} />
      <path d="M325.259 77.0905C321.573 77.0905 318.642 76.1943 316.466 74.402C314.296 72.6096 313.204 69.4158 313.204 64.8136V46.25H306.763V39.5051H313.204L314.188 29.9572H321.236V39.5051H331.842V46.25H321.236V64.8136C321.236 66.889 321.681 68.3107 322.564 69.0923C323.446 69.874 324.976 70.2648 327.145 70.2648H331.465V77.0838H325.259V77.0905Z" fill={typeColor} />
      <path d="M348.329 78C345.149 78 342.521 77.4677 340.446 76.4098C338.37 75.3519 336.834 73.9504 335.823 72.2052C334.812 70.46 334.307 68.5531 334.307 66.4845C334.307 62.8459 335.722 59.9687 338.552 57.8462C341.382 55.7237 345.425 54.6658 350.674 54.6658H360.525V53.9852C360.525 51.0541 359.73 48.8575 358.14 47.3953C356.55 45.9331 354.488 45.1987 351.961 45.1987C349.737 45.1987 347.804 45.7445 346.166 46.8293C344.522 47.9142 343.525 49.5178 343.174 51.6403H335.143C335.392 48.9114 336.315 46.5733 337.912 44.6327C339.502 42.6853 341.524 41.1962 343.976 40.1586C346.429 39.1209 349.117 38.602 352.049 38.602C357.304 38.602 361.368 39.9766 364.251 42.7325C367.129 45.4884 368.571 49.2348 368.571 53.9852V77.0971H361.597L360.916 70.6554C359.858 72.7308 358.315 74.4692 356.294 75.8842C354.265 77.2925 351.611 78 348.329 78ZM349.919 71.4842C352.089 71.4842 353.922 70.9654 355.411 69.9277C356.9 68.89 358.066 67.5154 358.895 65.7972C359.73 64.079 360.249 62.1856 360.451 60.1169H351.51C348.329 60.1169 346.065 60.6762 344.724 61.7813C343.383 62.8931 342.716 64.2811 342.716 65.9522C342.716 67.6704 343.363 69.018 344.65 70.0085C345.944 70.9923 347.696 71.4842 349.919 71.4842Z" fill={typeColor} />
      <path d="M348.755 23.4606L340.926 22.325C340.684 22.2882 340.563 22.0096 340.705 21.8098L343.173 18.3191C343.341 18.0772 343.147 17.7986 342.905 17.7986C342.841 17.7986 342.778 17.8197 342.715 17.8617L339.222 20.3273C339.164 20.3694 339.095 20.3904 339.032 20.3904C338.88 20.3904 338.732 20.28 338.706 20.1065L337.57 12.2839C337.543 12.0946 337.391 12 337.244 12C337.096 12 336.944 12.0946 336.917 12.2839L335.781 20.1118C335.755 20.2852 335.607 20.3957 335.455 20.3957C335.392 20.3957 335.323 20.3746 335.265 20.3378L331.851 17.9458C331.788 17.9038 331.724 17.8827 331.661 17.8827C331.425 17.8827 331.225 18.1614 331.393 18.4032L333.787 21.8151C333.929 22.0149 333.808 22.2935 333.566 22.3303L325.732 23.4658C325.358 23.5184 325.358 24.0599 325.732 24.1177L333.566 25.2532C333.808 25.29 333.929 25.5687 333.787 25.7685L331.425 29.1488C331.256 29.3854 331.456 29.6692 331.693 29.6692C331.756 29.6692 331.819 29.6482 331.882 29.6062L335.265 27.2457C335.323 27.2037 335.392 27.1879 335.455 27.1879C335.607 27.1879 335.755 27.2983 335.781 27.4718L336.917 35.2997C336.944 35.4889 337.096 35.5835 337.244 35.5835C337.391 35.5835 337.543 35.4889 337.57 35.2997L338.706 27.477C338.732 27.3035 338.88 27.1931 339.032 27.1931C339.095 27.1931 339.164 27.2142 339.222 27.2562L342.715 29.7166C342.778 29.7639 342.841 29.7797 342.905 29.7797C343.147 29.7797 343.341 29.4958 343.173 29.2592L340.705 25.7737C340.563 25.5739 340.684 25.2953 340.926 25.2585L348.755 24.123C349.129 24.0599 349.129 23.5184 348.755 23.4606Z" fill={starColor} />
    </Icon>
  )
})

export { Logotype }
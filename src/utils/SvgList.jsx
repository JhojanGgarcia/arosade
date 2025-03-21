export const SvgList = [
  {
    id: 0,
    name: "logo 1",
    Svg: ({ color, rotation, thickness, width = 30, height = 30 }) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 36 41"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <g id="Group 1">
          <path
            id="Vector"
            d="M17.8 33.429L11.722 27.351C7.42292 23.0519 0.158966 26.0909 0.158966 32.169V40.1H35.441V15.788L17.8 33.429Z"
            fill={color}
            stroke={color}
            strokeWidth={thickness}
          />
          <path
            id="Vector_2"
            d="M17.8 6.67098L23.878 12.749C28.1771 17.0481 35.441 14.0091 35.441 7.93105V0H0.158966V24.312L17.8 6.67098Z"
            fill={color}
            stroke={color}
            strokeWidth={thickness}
          />
        </g>
      </svg>
    ),
    SvgString: ({ color, rotation, thickness, width = 30, height = 30 }) => `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 36 41" fill="none" style="transform: rotate(${rotation}deg)">
    <g id="Group 1">
    <path
      id="Vector"
      d="M17.8 33.429L11.722 27.351C7.42292 23.0519 0.158966 26.0909 0.158966 32.169V40.1H35.441V15.788L17.8 33.429Z"
      fill="${color}"
      stroke="${color}"
      strokeWidth="${thickness}"
    />
    <path
      id="Vector_2"
      d="M17.8 6.67098L23.878 12.749C28.1771 17.0481 35.441 14.0091 35.441 7.93105V0H0.158966V24.312L17.8 6.67098Z"
      fill="${color}"
      stroke="${color}"
      strokeWidth="${thickness}"
    />
    </g>
    </svg>`,
  },
  {
    id: 1,
    name: "logo 2",
    Svg: ({ color, rotation, thickness, width = 46, height = 55 }) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 46 55"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <g id="Group 2">
          <path
            id="Vector"
            d="M22.6 5.70001V27.2L17.7 24.4C9 19.4 3.59999 10.1 3.59999 0H0V24.6C0 32.6 4.59999 40 11.9 43.5L22.7 48.7V27.2L27.6 30C36.3 35 41.7 44.3 41.7 54.4H45.3V29.8C45.3 21.8 40.7 14.4 33.4 10.9L22.6 5.70001Z"
            fill={color}
            stroke={color}
            strokeWidth={thickness}
          />
        </g>
      </svg>
    ),
    SvgString: ({
      color,
      rotation,
      thickness,
      width = 30,
      height = 30,
    }) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 46 55" fill="none" style="transform: rotate(${rotation}deg)">
    <g id="Group 2">
    <path
      id="Vector"
      d="M22.6 5.70001V27.2L17.7 24.4C9 19.4 3.59999 10.1 3.59999 0H0V24.6C0 32.6 4.59999 40 11.9 43.5L22.7 48.7V27.2L27.6 30C36.3 35 41.7 44.3 41.7 54.4H45.3V29.8C45.3 21.8 40.7 14.4 33.4 10.9L22.6 5.70001Z"
      fill="${color}"
      stroke="${color}"
      strokeWidth="${thickness}"
    />
    </g>
    </svg>`,
  },
  {
    id: 2,
    name: "logo 3",
    Svg: ({ color, rotation, thickness, width = 46, height = 55 }) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 57 57"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <g id="Group">
          <g id="Group_2">
            <path
              id="Vector"
              d="M40 16.3L32.7 7.4L30.7 4.1L32.3 0L22.6 8.2L29.9 17L31.9 20.3L30.3 24.4L40 16.3Z"
              fill={color}
              stroke={color}
              strokeWidth={thickness}
            />
            <path
              id="Vector_2"
              d="M25.9 12.3L14.5 12.5L10.7 12L8.60001 8.2L8.89999 20.9L20.3 20.7L24.1 21.2L26.2 25L25.9 12.3Z"
              fill={color}
              stroke={color}
              strokeWidth={thickness}
            />
            <path
              id="Vector_3"
              d="M14 20.9L7.10001 30L4.39999 32.8L0 32.1L10.1 39.7L17 30.6L19.7 27.9L24.1 28.6L14 20.9Z"
              fill={color}
              stroke={color}
              strokeWidth={thickness}
            />
            <path
              id="Vector_4"
              d="M13.3 35.6L16 46.7L16.5 50.5L13.2 53.5L25.4 50.3L22.6 39.2L22.1 35.4L25.4 32.5L13.3 35.6Z"
              fill={color}
              stroke={color}
              strokeWidth={thickness}
            />
            <path
              id="Vector_5"
              d="M24.3 45.3L34.6 50.1L37.9 52.2L38.2 56.6L43.3 45L32.9 40.2L29.6 38.2L29.3 33.8L24.3 45.3Z"
              fill={color}
              stroke={color}
              strokeWidth={thickness}
            />
            <path
              id="Vector_6"
              d="M38.7 42.7L48.9 37.6L52.5 36.3L56.1 38.8L50.3 27.6L40.1 32.7L36.4 34L32.8 31.5L38.7 42.7Z"
              fill={color}
              stroke={color}
              strokeWidth={thickness}
            />
            <path
              id="Vector_7"
              d="M45.7 29.8L48 18.6L49.3 14.9L53.5 13.7L41.1 11.2L38.8 22.4L37.5 26.1L33.3 27.3L45.7 29.8Z"
              fill={color}
              stroke={color}
              strokeWidth={thickness}
            />
          </g>
        </g>
      </svg>
    ),
    SvgString: ({
      color,
      rotation,
      thickness,
      width = 30,
      height = 30,
    }) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 57 57" fill="none" style="transform: rotate(${rotation}deg)">
    <g id="Group">
    <g id="Group_2">
      <path
        id="Vector"
        d="M40 16.3L32.7 7.4L30.7 4.1L32.3 0L22.6 8.2L29.9 17L31.9 20.3L30.3 24.4L40 16.3Z"
        fill="${color}"
        stroke="${color}"
        strokeWidth="${thickness}"
      />
      <path
        id="Vector_2"
        d="M25.9 12.3L14.5 12.5L10.7 12L8.60001 8.2L8.89999 20.9L20.3 20.7L24.1 21.2L26.2 25L25.9 12.3Z"
        fill="${color}"
        stroke="${color}"
        strokeWidth="${thickness}"
      />
      <path
        id="Vector_3"
        d="M14 20.9L7.10001 30L4.39999 32.8L0 32.1L10.1 39.7L17 30.6L19.7 27.9L24.1 28.6L14 20.9Z"
        fill="${color}"
        stroke="${color}"
        strokeWidth="${thickness}"
      />
      <path
        id="Vector_4"
        d="M13.3 35.6L16 46.7L16.5 50.5L13.2 53.5L25.4 50.3L22.6 39.2L22.1 35.4L25.4 32.5L13.3 35.6Z"
        fill="${color}"
        stroke="${color}"
        strokeWidth="${thickness}"
      />
      <path
        id="Vector_5"
        d="M24.3 45.3L34.6 50.1L37.9 52.2L38.2 56.6L43.3 45L32.9 40.2L29.6 38.2L29.3 33.8L24.3 45.3Z"
        fill="${color}"
        stroke="${color}"
        strokeWidth="${thickness}"
      />
      <path
        id="Vector_6"
        d="M38.7 42.7L48.9 37.6L52.5 36.3L56.1 38.8L50.3 27.6L40.1 32.7L36.4 34L32.8 31.5L38.7 42.7Z"
        fill="${color}"
        stroke="${color}"
        strokeWidth="${thickness}"
      />
      <path
        id="Vector_7"
        d="M45.7 29.8L48 18.6L49.3 14.9L53.5 13.7L41.1 11.2L38.8 22.4L37.5 26.1L33.3 27.3L45.7 29.8Z"
        fill="${color}"
        stroke="${color}"
        strokeWidth="${thickness}"
      />
    </g>
    </g>
    </svg>`,
  },
  {
    id: 3,
    name: "logo 4",
    Svg: ({ color, rotation, thickness, width = 46, height = 55 }) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 35 52"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path
          id="Vector"
          d="M28.5662 23.3416C28.5662 23.601 28.5662 23.8604 28.5662 24.2494C28.5662 30.4738 23.5478 35.6609 17.2427 35.6609C12.6103 35.6609 8.49264 32.808 6.81984 28.6584C6.81984 28.399 6.81984 28.2693 6.81984 28.01C6.81984 21.7855 11.8382 16.5985 18.1434 16.5985C22.7757 16.5985 26.7647 19.3217 28.5662 23.3416L28.4375 0C12.7389 0 0 12.8379 0 28.6584H6.56247V52C22.261 52 35 39.1621 35 23.3416H28.5662Z"
          fill={color}
          stroke={color}
          strokeWidth={thickness}
        />
      </svg>
    ),
    SvgString: ({
      color,
      rotation,
      thickness,
      width = 30,
      height = 30,
    }) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 35 52" fill="none" style="transform: rotate(${rotation}deg)">
    <path
    id="Vector"
    d="M28.5662 23.3416C28.5662 23.601 28.5662 23.8604 28.5662 24.2494C28.5662 30.4738 23.5478 35.6609 17.2427 35.6609C12.6103 35.6609 8.49264 32.808 6.81984 28.6584C6.81984 28.399 6.81984 28.2693 6.81984 28.01C6.81984 21.7855 11.8382 16.5985 18.1434 16.5985C22.7757 16.5985 26.7647 19.3217 28.5662 23.3416L28.4375 0C12.7389 0 0 12.8379 0 28.6584H6.56247V52C22.261 52 35 39.1621 35 23.3416H28.5662Z"
    fill="${color}"
    stroke="${color}"
    strokeWidth="${thickness}"
    />
    </svg>`,
  },
  {
    id: 4,
    name: "logo 5",
    Svg: ({ color, rotation, thickness, width = 46, height = 55 }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 50 50"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path
          id="Vector"
          d="M24.7 0C11.1 0 0 11.1 0 24.7C0 38.3 11.1 49.4 24.7 49.4C38.3 49.4 49.4 38.3 49.4 24.7C49.4 11.1 38.3 0 24.7 0ZM6.9 24.7C6.9 19.6 9.1 14.9 12.6 11.7C14 10.4 16.4 10.8 17.4 12.5L23.6 23.2C24.2 24.2 24.2 25.4 23.6 26.4L17.4 37.1C16.4 38.9 14 39.2 12.5 37.8C9.1 34.4 6.9 29.8 6.9 24.7ZM32 36.9L25.8 26.2C25.2 25.2 25.2 24 25.8 23L32 12.3C33 10.6 35.3 10.2 36.8 11.5C40.3 14.7 42.5 19.4 42.5 24.5C42.5 29.6 40.3 34.3 36.8 37.5C35.3 39.1 33 38.7 32 36.9Z"
          fill={color}
          stroke={color}
          strokeWidth={thickness}
        />
      </svg>
    ),
    SvgString: ({
      color,
      rotation,
      thickness,
      width = 30,
      height = 30,
    }) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 50 50" fill="none" style="transform: rotate(${rotation}deg)">
    <path
    id="Vector"
    d="M24.7 0C11.1 0 0 11.1 0 24.7C0 38.3 11.1 49.4 24.7 49.4C38.3 49.4 49.4 38.3 49.4 24.7C49.4 11.1 38.3 0 24.7 0ZM6.9 24.7C6.9 19.6 9.1 14.9 12.6 11.7C14 10.4 16.4 10.8 17.4 12.5L23.6 23.2C24.2 24.2 24.2 25.4 23.6 26.4L17.4 37.1C16.4 38.9 14 39.2 12.5 37.8C9.1 34.4 6.9 29.8 6.9 24.7ZM32 36.9L25.8 26.2C25.2 25.2 25.2 24 25.8 23L32 12.3C33 10.6 35.3 10.2 36.8 11.5C40.3 14.7 42.5 19.4 42.5 24.5C42.5 29.6 40.3 34.3 36.8 37.5C35.3 39.1 33 38.7 32 36.9Z"
    fill="${color}"
    stroke="${color}"
    strokeWidth="${thickness}"
    />
    </svg>`,
  },
  {
    id: 5,
    name: "logo 6",
    Svg: ({ color, rotation, thickness, width = 46, height = 55 }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 43 40"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path
          id="Vector"
          d="M37.2 0H0C2.7 0.6 4.59999 3 4.59999 5.7V39.3C8.29999 35.6 10.3 30.7 10.3 25.5V6.7C10.3 6.2 10.7 5.7 11.3 5.7C11.8 5.7 12.3 6.1 12.3 6.7V31.7C16 28 18 23.1 18 17.9V6.7C18 6.2 18.4 5.7 19 5.7C19.5 5.7 20 6.1 20 6.7V24.1L25 19.1C25.2 18.9 25.3 18.7 25.4 18.5V18.4C25.6 18.1 25.6 17.8 25.7 17.4C26.2 10.9 31.6 5.7 38.3 5.7H43L37.2 0Z"
          fill={color}
          stroke={color}
          strokeWidth={thickness}
        />
      </svg>
    ),
    SvgString: ({
      color,
      rotation,
      thickness,
      width = 30,
      height = 30,
    }) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 43 40" fill="none" style="transform: rotate(${rotation}deg)">
    <path
    id="Vector"
    d="M37.2 0H0C2.7 0.6 4.59999 3 4.59999 5.7V39.3C8.29999 35.6 10.3 30.7 10.3 25.5V6.7C10.3 6.2 10.7 5.7 11.3 5.7C11.8 5.7 12.3 6.1 12.3 6.7V31.7C16 28 18 23.1 18 17.9V6.7C18 6.2 18.4 5.7 19 5.7C19.5 5.7 20 6.1 20 6.7V24.1L25 19.1C25.2 18.9 25.3 18.7 25.4 18.5V18.4C25.6 18.1 25.6 17.8 25.7 17.4C26.2 10.9 31.6 5.7 38.3 5.7H43L37.2 0Z"
    fill="${color}"
    stroke="${color}"
    strokeWidth="${thickness}"
    />
    </svg>`,
  },
  {
    id: 6,
    name: "logo 7",
    Svg: ({ color, rotation, thickness, width = 46, height = 55 }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 72 58"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path
          d="M56.4 29C56.4 40.1838 47.2666 49.25 36 49.25C24.7334 49.25 15.6 40.1838 15.6 29M56.4 29C56.4 17.8162 47.2666 8.75 36 8.75C24.7334 8.75 15.6 17.8162 15.6 29M56.4 29C56.4 43.9117 44.2221 56 29.2 56C14.1779 56 2 43.9117 2 29M15.6 29C15.6 14.0883 27.7779 2 42.8 2C57.8221 2 70 14.0883 70 29"
          fill={color}
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    SvgString: ({
      color,
      rotation,
      thickness,
      width = 30,
      height = 30,
    }) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 72 58" fill="none" style="transform: rotate(${rotation}deg)">
    <path
    d="M56.4 29C56.4 40.1838 47.2666 49.25 36 49.25C24.7334 49.25 15.6 40.1838 15.6 29M56.4 29C56.4 17.8162 47.2666 8.75 36 8.75C24.7334 8.75 15.6 17.8162 15.6 29M56.4 29C56.4 43.9117 44.2221 56 29.2 56C14.1779 56 2 43.9117 2 29M15.6 29C15.6 14.0883 27.7779 2 42.8 2C57.8221 2 70 14.0883 70 29"
    fill="${color}"
    stroke="${color}"
    strokeWidth="${thickness}"
    strokeLinecap="round"
    strokeLinejoin="round"
    />
    </svg>`,
  },
  {
    id: 7,
    name: "logo 8",
    Svg: ({ color, rotation, thickness, width = 46, height = 55 }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 35 35"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path
          d="M17.5 17.5H34V1H1L17.5 17.5ZM17.5 17.5H1V34H34L17.5 17.5Z"
          stroke={color}
          fill={color}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    SvgString: ({
      color,
      rotation,
      thickness,
      width = 30,
      height = 30,
    }) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 35 35" fill="none" style="transform: rotate(${rotation}deg)">
    <path
    d="M17.5 17.5H34V1H1L17.5 17.5ZM17.5 17.5H1V34H34L17.5 17.5Z"
    stroke="${color}"
    fill="${color}"
    strokeWidth="${thickness}"
    strokeLinecap="round"
    strokeLinejoin="round"
    />
    </svg>`,
  },
  {
    id: 8,
    name: "logo 9",
    Svg: ({ color, rotation, thickness, width = 46, height = 55 }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 147 146"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path
          d="M73.5175 145.771L146.376 0.0302734H115.892L73.5175 84.7797L31.1185 0.0302734H0.63501L73.5175 145.771Z"
          fill={color}
          stroke={color}
          strokeWidth={thickness}
        />
        <path
          d="M101.539 0.0302734H97.6894L73.517 20.2064L49.3447 0.0302734H45.4703L73.517 56.075L101.539 0.0302734Z"
          fill={color}
          stroke={color}
          strokeWidth={thickness}
        />
      </svg>
    ),
    SvgString: ({
      color,
      rotation,
      thickness,
      width = 30,
      height = 30,
    }) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 147 146" fill="none">
    <path
    d="M73.5175 145.771L146.376 0.0302734H115.892L73.5175 84.7797L31.1185 0.0302734H0.63501L73.5175 145.771Z"
    fill="${color}"
    stroke="${color}"
    strokeWidth="${thickness}"
    />
    <path
    d="M101.539 0.0302734H97.6894L73.517 20.2064L49.3447 0.0302734H45.4703L73.517 56.075L101.539 0.0302734Z"
    fill="${color}"
    stroke="${color}"
    strokeWidth="${thickness}"
    />
    </svg>`,
  },
  {
    id: 9,
    name: "logo 10",
    Svg: ({ color, rotation, thickness, width = 46, height = 55 }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 140 140"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path d="M70 140L0 70L70 0L140 70L70 140Z" fill="none" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M70 140L0 70L70 0L140 70L70 140ZM70 128.686L128.686 70L70 11.3137L11.3137 70L70 128.686Z"
          fill={color}
          stroke={color}
          strokeWidth={thickness}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M70 140L102 76.3636L70 0L38 76.3636L70 140ZM70 122.193L93.1985 76.0594L70 20.6993L46.8015 76.0594L70 122.193Z"
          fill={color}
          stroke={color}
          strokeWidth={thickness}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 72.5L4.64795 66L70.3239 79.8265L136 66L135 73L128.5 75.7543L70.3239 88.0019L9.99987 75.3021L6 72.5Z"
          fill={color}
          stroke={color}
          strokeWidth={thickness}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M66 136V9H74V136H66Z"
          fill={color}
          stroke={color}
          strokeWidth={thickness}
        />
      </svg>
    ),
    SvgString: ({
      color,
      rotation,
      thickness,
      width = 30,
      height = 30,
    }) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 140 140" fill="none" style="transform: rotate(${rotation}deg)">
  <path d="M70 140L0 70L70 0L140 70L70 140Z" fill="none" />
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M70 140L0 70L70 0L140 70L70 140ZM70 128.686L128.686 70L70 11.3137L11.3137 70L70 128.686Z"
    fill="${color}"
    stroke="${color}"
    strokeWidth="${thickness}"
  />
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M70 140L102 76.3636L70 0L38 76.3636L70 140ZM70 122.193L93.1985 76.0594L70 20.6993L46.8015 76.0594L70 122.193Z"
    fill="${color}"
    stroke="${color}"
    strokeWidth="${thickness}"
  />
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M6 72.5L4.64795 66L70.3239 79.8265L136 66L135 73L128.5 75.7543L70.3239 88.0019L9.99987 75.3021L6 72.5Z"
    fill="${color}"
    stroke="${color}"
    strokeWidth="${thickness}"
  />
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M66 136V9H74V136H66Z"
    fill="${color}"
    stroke="${color}"
    strokeWidth="${thickness}"
    />
    </svg>`,
  },
  {
    id: 10,
    name: "logo 11",
    Svg: ({ color, rotation, thickness, width = 46, height = 55 }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 44.343 46"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path
          fill={color}
          stroke={color}
          strokeWidth={thickness}
          d="M 22.15625 0 A 1.0001 1.0001 0 0 0 21.464844 0.29296875 L 21.445312 0.3125 L 0.87890625 20.878906 C -0.28429206 22.042104 -0.28429206 23.957896 0.87890625 25.121094 L 21.464844 45.707031 A 1.0001 1.0001 0 0 0 22.878906 45.707031 L 22.898438 45.6875 L 43.464844 25.121094 C 44.628041 23.957896 44.628041 22.042104 43.464844 20.878906 L 22.878906 0.29296875 A 1.0001 1.0001 0 0 0 22.15625 0 z M 22.234375 2.4765625 L 42.050781 22.292969 C 42.449681 22.691868 42.449681 23.308132 42.050781 23.707031 L 25.933594 39.824219 C 26.052442 39.242277 26.138227 38.651984 26.169922 38.052734 A 1.0001 1.0001 0 0 0 26.169922 37.947266 C 26.036349 35.421796 25.108902 33.01145 23.537109 31.050781 L 30.878906 23.707031 A 1.0001 1.0001 0 0 0 30.878906 22.292969 L 22.898438 14.3125 C 21.275291 12.594247 20.319287 10.358489 20.181641 8 C 20.299146 5.9866151 21.018169 4.0654641 22.234375 2.4765625 z M 18.410156 6.1757812 C 18.291308 6.7577229 18.205523 7.3480156 18.173828 7.9472656 A 1.0001 1.0001 0 0 0 18.173828 8.0527344 C 18.307423 10.578631 19.236316 12.988371 20.808594 14.949219 L 13.464844 22.292969 A 1.0001 1.0001 0 0 0 13.464844 23.707031 L 21.464844 31.708984 C 23.075846 33.424403 24.02503 35.651211 24.162109 38 C 24.044604 40.013385 23.325581 41.934536 22.109375 43.523438 L 2.2929688 23.707031 C 1.8940686 23.308131 1.8940686 22.691869 2.2929688 22.292969 L 18.410156 6.1757812 z M 22.171875 16.414062 L 28.757812 23 L 22.171875 29.585938 L 15.585938 23 L 22.171875 16.414062 z"
        ></path>
      </svg>
    ),
    SvgString: ({
      color,
      rotation,
      thickness,
      width = 30,
      height = 30,
    }) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 44.343 46" fill="none" style="transform: rotate(${rotation}deg)">
    <path
    fill="${color}"
    stroke="${color}"
    strokeWidth="${thickness}"
    d="M 22.15625 0 A 1.0001 1.0001 0 0 0 21.464844 0.29296875 L 21.445312 0.3125 L 0.87890625 20.878906 C -0.28429206 22.042104 -0.28429206 23.957896 0.87890625 25.121094 L 21.464844 45.707031 A 1.0001 1.0001 0 0 0 22.878906 45.707031 L 22.898438 45.6875 L 43.464844 25.121094 C 44.628041 23.957896 44.628041 22.042104 43.464844 20.878906 L 22.878906 0.29296875 A 1.0001 1.0001 0 0 0 22.15625 0 z M 22.234375 2.4765625 L 42.050781 22.292969 C 42.449681 22.691868 42.449681 23.308132 42.050781 23.707031 L 25.933594 39.824219 C 26.052442 39.242277 26.138227 38.651984 26.169922 38.052734 A 1.0001 1.0001 0 0 0 26.169922 37.947266 C 26.036349 35.421796 25.108902 33.01145 23.537109 31.050781 L 30.878906 23.707031 A 1.0001 1.0001 0 0 0 30.878906 22.292969 L 22.898438 14.3125 C 21.275291 12.594247 20.319287 10.358489 20.181641 8 C 20.299146 5.9866151 21.018169 4.0654641 22.234375 2.4765625 z M 18.410156 6.1757812 C 18.291308 6.7577229 18.205523 7.3480156 18.173828 7.9472656 A 1.0001 1.0001 0 0 0 18.173828 8.0527344 C 18.307423 10.578631 19.236316 12.988371 20.808594 14.949219 L 13.464844 22.292969 A 1.0001 1.0001 0 0 0 13.464844 23.707031 L 21.464844 31.708984 C 23.075846 33.424403 24.02503 35.651211 24.162109 38 C 24.044604 40.013385 23.325581 41.934536 22.109375 43.523438 L 2.2929688 23.707031 C 1.8940686 23.308131 1.8940686 22.691869 2.2929688 22.292969 L 18.410156 6.1757812 z M 22.171875 16.414062 L 28.757812 23 L 22.171875 29.585938 L 15.585938 23 L 22.171875 16.414062 z"
  ></path>
  </svg>`,
  },
  {
    id: 11,
    name: "logo 12",
    Svg: ({ color, rotation, thickness, width = 46, height = 55 }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 50 50"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path
          fill={color}
          stroke={color}
          strokeWidth={thickness}
          d="M 12.007812 0 A 1.0001 1.0001 0 0 0 11 1 L 11 13.353516 A 1.0001 1.0001 0 0 0 11.566406 14.255859 L 29.566406 22.902344 A 1.0001 1.0001 0 0 0 30.554688 22.832031 L 39.554688 16.832031 A 1.0001 1.0001 0 0 0 39.486328 15.125 L 12.486328 0.125 A 1.0001 1.0001 0 0 0 12.007812 0 z M 13 2.7011719 L 37.080078 16.078125 L 29.919922 20.851562 L 13 12.724609 L 13 2.7011719 z M 11.958984 17 A 1.0001 1.0001 0 0 0 11 18 L 11 49 A 1.0001 1.0001 0 0 0 11.001953 49.033203 A 1.0001 1.0001 0 0 0 11.009766 49.121094 A 1.0001 1.0001 0 0 0 11.011719 49.148438 A 1.0001 1.0001 0 0 0 11.025391 49.224609 A 1.0001 1.0001 0 0 0 11.033203 49.253906 A 1.0001 1.0001 0 0 0 11.048828 49.304688 A 1.0001 1.0001 0 0 0 11.080078 49.388672 A 1.0001 1.0001 0 0 0 11.123047 49.478516 A 1.0001 1.0001 0 0 0 11.175781 49.564453 A 1.0001 1.0001 0 0 0 11.222656 49.626953 A 1.0001 1.0001 0 0 0 11.251953 49.660156 A 1.0001 1.0001 0 0 0 11.283203 49.693359 A 1.0001 1.0001 0 0 0 11.310547 49.720703 A 1.0001 1.0001 0 0 0 11.361328 49.767578 A 1.0001 1.0001 0 0 0 11.390625 49.791016 A 1.0001 1.0001 0 0 0 11.439453 49.826172 A 1.0001 1.0001 0 0 0 11.46875 49.845703 A 1.0001 1.0001 0 0 0 11.546875 49.890625 A 1.0001 1.0001 0 0 0 11.625 49.925781 A 1.0001 1.0001 0 0 0 11.648438 49.935547 A 1.0001 1.0001 0 0 0 11.697266 49.951172 A 1.0001 1.0001 0 0 0 11.757812 49.96875 A 1.0001 1.0001 0 0 0 11.791016 49.976562 A 1.0001 1.0001 0 0 0 11.839844 49.986328 A 1.0001 1.0001 0 0 0 11.914062 49.994141 A 1.0001 1.0001 0 0 0 11.929688 49.996094 A 1.0001 1.0001 0 0 0 11.941406 49.996094 A 1.0001 1.0001 0 0 0 12.029297 49.998047 A 1.0001 1.0001 0 0 0 12.128906 49.990234 A 1.0001 1.0001 0 0 0 12.207031 49.976562 A 1.0001 1.0001 0 0 0 12.228516 49.972656 A 1.0001 1.0001 0 0 0 12.259766 49.964844 A 1.0001 1.0001 0 0 0 12.324219 49.945312 A 1.0001 1.0001 0 0 0 12.326172 49.945312 A 1.0001 1.0001 0 0 0 12.416016 49.908203 A 1.0001 1.0001 0 0 0 12.496094 49.869141 L 40.496094 33.869141 A 1.0001 1.0001 0 0 0 41 33 L 41 20 A 1.0001 1.0001 0 0 0 39.28125 19.304688 L 14.185547 45.296875 L 20.955078 23.294922 A 1.0001 1.0001 0 0 0 20.529297 22.152344 L 12.529297 17.152344 A 1.0001 1.0001 0 0 0 11.958984 17 z M 13 19.804688 L 18.818359 23.441406 L 13 42.351562 L 13 19.804688 z M 39 22.474609 L 39 32.419922 L 17.582031 44.658203 L 39 22.474609 z"
        ></path>
      </svg>
    ),
    SvgString: ({
      color,
      rotation,
      thickness,
      width = 30,
      height = 30,
    }) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 50 50" fill="none" style="transform: rotate(${rotation}deg)">
    <path
    fill="${color}"
    stroke="${color}"
    strokeWidth="${thickness}"
    d="M 12.007812 0 A 1.0001 1.0001 0 0 0 11 1 L 11 13.353516 A 1.0001 1.0001 0 0 0 11.566406 14.255859 L 29.566406 22.902344 A 1.0001 1.0001 0 0 0 30.554688 22.832031 L 39.554688 16.832031 A 1.0001 1.0001 0 0 0 39.486328 15.125 L 12.486328 0.125 A 1.0001 1.0001 0 0 0 12.007812 0 z M 13 2.7011719 L 37.080078 16.078125 L 29.919922 20.851562 L 13 12.724609 L 13 2.7011719 z M 11.958984 17 A 1.0001 1.0001 0 0 0 11 18 L 11 49 A 1.0001 1.0001 0 0 0 11.001953 49.033203 A 1.0001 1.0001 0 0 0 11.009766 49.121094 A 1.0001 1.0001 0 0 0 11.011719 49.148438 A 1.0001 1.0001 0 0 0 11.025391 49.224609 A 1.0001 1.0001 0 0 0 11.033203 49.253906 A 1.0001 1.0001 0 0 0 11.048828 49.304688 A 1.0001 1.0001 0 0 0 11.080078 49.388672 A 1.0001 1.0001 0 0 0 11.123047 49.478516 A 1.0001 1.0001 0 0 0 11.175781 49.564453 A 1.0001 1.0001 0 0 0 11.222656 49.626953 A 1.0001 1.0001 0 0 0 11.251953 49.660156 A 1.0001 1.0001 0 0 0 11.283203 49.693359 A 1.0001 1.0001 0 0 0 11.310547 49.720703 A 1.0001 1.0001 0 0 0 11.361328 49.767578 A 1.0001 1.0001 0 0 0 11.390625 49.791016 A 1.0001 1.0001 0 0 0 11.439453 49.826172 A 1.0001 1.0001 0 0 0 11.46875 49.845703 A 1.0001 1.0001 0 0 0 11.546875 49.890625 A 1.0001 1.0001 0 0 0 11.625 49.925781 A 1.0001 1.0001 0 0 0 11.648438 49.935547 A 1.0001 1.0001 0 0 0 11.697266 49.951172 A 1.0001 1.0001 0 0 0 11.757812 49.96875 A 1.0001 1.0001 0 0 0 11.791016 49.976562 A 1.0001 1.0001 0 0 0 11.839844 49.986328 A 1.0001 1.0001 0 0 0 11.914062 49.994141 A 1.0001 1.0001 0 0 0 11.929688 49.996094 A 1.0001 1.0001 0 0 0 11.941406 49.996094 A 1.0001 1.0001 0 0 0 12.029297 49.998047 A 1.0001 1.0001 0 0 0 12.128906 49.990234 A 1.0001 1.0001 0 0 0 12.207031 49.976562 A 1.0001 1.0001 0 0 0 12.228516 49.972656 A 1.0001 1.0001 0 0 0 12.259766 49.964844 A 1.0001 1.0001 0 0 0 12.324219 49.945312 A 1.0001 1.0001 0 0 0 12.326172 49.945312 A 1.0001 1.0001 0 0 0 12.416016 49.908203 A 1.0001 1.0001 0 0 0 12.496094 49.869141 L 40.496094 33.869141 A 1.0001 1.0001 0 0 0 41 33 L 41 20 A 1.0001 1.0001 0 0 0 39.28125 19.304688 L 14.185547 45.296875 L 20.955078 23.294922 A 1.0001 1.0001 0 0 0 20.529297 22.152344 L 12.529297 17.152344 A 1.0001 1.0001 0 0 0 11.958984 17 z M 13 19.804688 L 18.818359 23.441406 L 13 42.351562 L 13 19.804688 z M 39 22.474609 L 39 32.419922 L 17.582031 44.658203 L 39 22.474609 z"
    ></path>
    </svg>`,
  },
  {
    id: 12,
    name: "logo 13",
    Svg: ({ color, rotation, thickness, width = 46, height = 55 }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 72 72"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path
          fill={color}
          stroke={color}
          strokeWidth={thickness}
          d="M24.445 43.857H18.1c-.382 0-.668-.173-.827-.429-.168-.272-.178-.624 0-.966l6.743-11.823c.006-.016.006-.02 0-.036l-4.29-7.379c-.181-.349-.206-.695-.038-.966.159-.262.481-.399.863-.399h6.347c.973 0 1.45.625 1.765 1.186 0 0 4.339 7.516 4.364 7.559-.256.451-6.85 12.036-6.85 12.036C25.853 43.221 25.394 43.857 24.445 43.857zM54.722 15.384L40.673 40.226c-.008.017-.008.03 0 .041l8.945 16.349c.176.352.184.707.014.979C49.468 57.855 49.175 58 48.79 58h-6.338c-.97 0-1.458-.644-1.771-1.212 0 0-8.995-16.497-9.018-16.539C32.112 39.454 45.78 15.21 45.78 15.21 46.12 14.6 46.535 14 47.479 14h6.415c.38 0 .682.143.842.407C54.902 14.677 54.896 15.031 54.722 15.384z"
        ></path>
      </svg>
    ),
    SvgString: ({ color, rotation, thickness, width = 30, height = 30 }) => `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 72 72" fill="none" style="transform: rotate(${rotation}deg)">
  <path
    fill="${color}"
    stroke="${color}"
    strokeWidth="${thickness}"
    d="M24.445 43.857H18.1c-.382 0-.668-.173-.827-.429-.168-.272-.178-.624 0-.966l6.743-11.823c.006-.016.006-.02 0-.036l-4.29-7.379c-.181-.349-.206-.695-.038-.966.159-.262.481-.399.863-.399h6.347c.973 0 1.45.625 1.765 1.186 0 0 4.339 7.516 4.364 7.559-.256.451-6.85 12.036-6.85 12.036C25.853 43.221 25.394 43.857 24.445 43.857zM54.722 15.384L40.673 40.226c-.008.017-.008.03 0 .041l8.945 16.349c.176.352.184.707.014.979C49.468 57.855 49.175 58 48.79 58h-6.338c-.97 0-1.458-.644-1.771-1.212 0 0-8.995-16.497-9.018-16.539C32.112 39.454 45.78 15.21 45.78 15.21 46.12 14.6 46.535 14 47.479 14h6.415c.38 0 .682.143.842.407C54.902 14.677 54.896 15.031 54.722 15.384z"
  ></path>
</svg>`,
  },
  {
    id: 13,
    name: "logo 14",
    Svg: ({ color, rotation, thickness, width = 46, height = 55 }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 41 56"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path
          d="M5.53467 0.57749C5.27319 11.5014 7.36836 19.1065 11.2402 28.2112V29.0074V29.0118C7.51655 39.2514 4.87142 46.3248 0.372894 55.0398C11.5751 51.688 21.4329 48.6191 33.1058 50.5176C35.1824 46.9613 36.943 43.6576 38.1289 40.5922C40.0047 35.6518 41.5784 29.4699 38.804 24.5523C37.4275 22.1121 35.1899 20.7345 32.9356 20.3075C30.7512 19.8935 28.5742 20.2469 26.5975 20.7949C30.5954 14.2845 32.6927 7.29458 31.0077 0.577087L5.53467 0.57749ZM16.301 4.46441H27.6443C27.0229 17.1772 23.4375 20.6115 18.8684 26.7978C23.8991 23.5625 27.8315 22.2575 32.2112 24.1274C40.4573 27.8785 34.3951 40.489 30.9766 46.3937C29.7201 46.21 24.9889 45.581 18.1931 46.3805C17.1609 40.3675 15.0167 34.3761 12.4945 29.0121V28.0462C15.2298 19.0746 16.1825 10.3828 16.301 4.46441Z"
          fill={color}
          stroke={color}
          strokeWidth={thickness}
        />
      </svg>
    ),
    SvgString: ({ color, rotation, thickness, width = 30, height = 30 }) => `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${width}"
        height="${height}"
        viewBox="0 0 41 56"
        fill="none"
       style="transform: rotate(${rotation}deg)"
      >
        <path
          d="M5.53467 0.57749C5.27319 11.5014 7.36836 19.1065 11.2402 28.2112V29.0074V29.0118C7.51655 39.2514 4.87142 46.3248 0.372894 55.0398C11.5751 51.688 21.4329 48.6191 33.1058 50.5176C35.1824 46.9613 36.943 43.6576 38.1289 40.5922C40.0047 35.6518 41.5784 29.4699 38.804 24.5523C37.4275 22.1121 35.1899 20.7345 32.9356 20.3075C30.7512 19.8935 28.5742 20.2469 26.5975 20.7949C30.5954 14.2845 32.6927 7.29458 31.0077 0.577087L5.53467 0.57749ZM16.301 4.46441H27.6443C27.0229 17.1772 23.4375 20.6115 18.8684 26.7978C23.8991 23.5625 27.8315 22.2575 32.2112 24.1274C40.4573 27.8785 34.3951 40.489 30.9766 46.3937C29.7201 46.21 24.9889 45.581 18.1931 46.3805C17.1609 40.3675 15.0167 34.3761 12.4945 29.0121V28.0462C15.2298 19.0746 16.1825 10.3828 16.301 4.46441Z"
          fill="${color}"
          stroke="${color}"
          strokeWidth="${thickness}"
        />
      </svg>
     
     `,
  },
  {
    id: 14,
    name: "logo 15",
    Svg: ({ color, rotation, thickness, width = 46, height = 55 }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 50 50"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.8126 31.25V6.25L3 12.5V37.5L24.608 50L35.4206 43.75L13.8126 31.25Z"
          fill={color}
          stroke={color}
          strokeWidth={thickness}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.6074 25L46.2155 37.5V25L35.42 18.75V6.25L24.6074 0V25Z"
          fill={color}
          stroke={color}
          strokeWidth={thickness}
        />
      </svg>
    ),
    SvgString: ({ color, rotation, thickness, width = 30, height = 30 }) => `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${width}"
        height="${height}"
        viewBox="0 0 50 50"
        fill="none"
        style="transform: rotate(${rotation}deg)"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.8126 31.25V6.25L3 12.5V37.5L24.608 50L35.4206 43.75L13.8126 31.25Z"
          fill="${color}"
          stroke="${color}"
          strokeWidth="${thickness}"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.6074 25L46.2155 37.5V25L35.42 18.75V6.25L24.6074 0V25Z"
          fill="${color}"
          stroke="${color}"
          strokeWidth="${thickness}"
        />
      </svg>
     
     `,
  },
  {
    id: 15,
    name: "logo 16",
    Svg: ({ color, rotation, thickness, width = 46, height = 55 }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 50 50"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path
          d="M49.8662 12.0624C50.4925 9.60553 49.0085 7.1061 46.5516 6.47982C44.0946 5.85355 41.5952 7.33758 40.9689 9.79451C40.3427 12.2514 41.8267 14.7509 44.2836 15.3771C46.7405 16.0034 49.24 14.5194 49.8662 12.0624Z"
          fill={color}
          stroke={color}
          strokeWidth={thickness}
        />
        <path
          d="M34.4477 7.94628C38.6903 2.65222 31.2517 -2.66888 27.3643 2.18078C27.1462 2.39939 1.93817 33.466 1.76757 33.7248C-2.71175 39.3138 4.41428 45.0253 8.85094 39.4903C9.06886 39.2715 34.2771 8.20482 34.4477 7.94628Z"
          fill={color}
          stroke={color}
          strokeWidth={thickness}
        />
        <path
          d="M40.0007 24.8616C44.0722 19.7814 36.9464 14.0701 32.9194 19.0942C32.6994 19.3142 15.5752 40.4938 15.4032 40.7547C11.3049 46.0625 18.4307 51.7737 22.4845 46.522C22.7045 46.302 39.829 25.1224 40.0007 24.8616Z"
          fill={color}
          stroke={color}
          strokeWidth={thickness}
        />
        <path
          d="M8.55583 15.214C10.9255 14.3124 12.1156 11.6605 11.214 9.29076C10.3124 6.92106 7.66043 5.73095 5.29073 6.63259C2.92102 7.53422 1.73092 10.1862 2.63255 12.5559C3.53418 14.9256 6.18613 16.1157 8.55583 15.214Z"
          fill={color}
          stroke={color}
          strokeWidth={thickness}
        />
      </svg>
    ),
    SvgString: ({ color, rotation, thickness, width = 30, height = 30 }) => `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${width}"
        height="${height}"
        viewBox="0 0 50 50"
        fill="none"
        style="transform: rotate(${rotation}deg)"
      >
        <path
          d="M49.8662 12.0624C50.4925 9.60553 49.0085 7.1061 46.5516 6.47982C44.0946 5.85355 41.5952 7.33758 40.9689 9.79451C40.3427 12.2514 41.8267 14.7509 44.2836 15.3771C46.7405 16.0034 49.24 14.5194 49.8662 12.0624Z"
          fill="${color}"
          stroke="${color}"
          strokeWidth="${thickness}"
        />
        <path
          d="M34.4477 7.94628C38.6903 2.65222 31.2517 -2.66888 27.3643 2.18078C27.1462 2.39939 1.93817 33.466 1.76757 33.7248C-2.71175 39.3138 4.41428 45.0253 8.85094 39.4903C9.06886 39.2715 34.2771 8.20482 34.4477 7.94628Z"
          fill="${color}"
          stroke="${color}"
          strokeWidth="${thickness}"
        />
        <path
          d="M40.0007 24.8616C44.0722 19.7814 36.9464 14.0701 32.9194 19.0942C32.6994 19.3142 15.5752 40.4938 15.4032 40.7547C11.3049 46.0625 18.4307 51.7737 22.4845 46.522C22.7045 46.302 39.829 25.1224 40.0007 24.8616Z"
          fill="${color}"
          stroke="${color}"
          strokeWidth="${thickness}"
        />
        <path
          d="M8.55583 15.214C10.9255 14.3124 12.1156 11.6605 11.214 9.29076C10.3124 6.92106 7.66043 5.73095 5.29073 6.63259C2.92102 7.53422 1.73092 10.1862 2.63255 12.5559C3.53418 14.9256 6.18613 16.1157 8.55583 15.214Z"
          fill="${color}"
          stroke="${color}"
          strokeWidth="${thickness}"
        />
      </svg>
     
     `,
  },
  {
    id: 16,
    name: "logo 17",
    Svg: ({ color, rotation, thickness, width = 46, height = 55 }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 51 51"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <path
          d="M14.6077 33.6425C8.88405 33.6425 0.750977 34.3011 0.750977 26.2045C0.750977 22.3478 3.89147 19.2073 7.77577 19.2073C21.2744 19.2073 32.211 30.1439 32.211 43.6425C32.211 47.5149 29.1049 50.7775 25.1862 50.7775C17.5035 50.7775 18.1614 42.5854 18.1614 37.2238C18.1614 35.2403 16.5636 33.6425 14.6077 33.6425Z"
          fill={color}
          stroke={color}
          strokeWidth={thickness}
        />
        <path
          d="M33.6442 14.6067C33.6442 9.1977 34.421 0.75 26.6195 0.75C22.6511 0.75 19.209 3.63652 19.209 7.77479C19.209 21.2734 30.1456 32.2101 43.6442 32.2101H43.7544C47.6387 32.2101 50.7792 29.0696 50.7792 25.1853C50.7792 17.5025 42.5871 18.1605 37.2255 18.1605C35.242 18.1605 33.6442 16.5627 33.6442 14.6067Z"
          fill={color}
          stroke={color}
          strokeWidth={thickness}
        />
      </svg>
    ),
    SvgString: ({ color, rotation, thickness, width = 30, height = 30 }) => `
     <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${width}"
        height="${height}"
        viewBox="0 0 51 51"
        fill="none"
        style="transform: rotate(${rotation}deg)"
      >
        <path
          d="M14.6077 33.6425C8.88405 33.6425 0.750977 34.3011 0.750977 26.2045C0.750977 22.3478 3.89147 19.2073 7.77577 19.2073C21.2744 19.2073 32.211 30.1439 32.211 43.6425C32.211 47.5149 29.1049 50.7775 25.1862 50.7775C17.5035 50.7775 18.1614 42.5854 18.1614 37.2238C18.1614 35.2403 16.5636 33.6425 14.6077 33.6425Z"
          fill="${color}"
          stroke="${color}"
          strokeWidth="${thickness}"
        />
        <path
          d="M33.6442 14.6067C33.6442 9.1977 34.421 0.75 26.6195 0.75C22.6511 0.75 19.209 3.63652 19.209 7.77479C19.209 21.2734 30.1456 32.2101 43.6442 32.2101H43.7544C47.6387 32.2101 50.7792 29.0696 50.7792 25.1853C50.7792 17.5025 42.5871 18.1605 37.2255 18.1605C35.242 18.1605 33.6442 16.5627 33.6442 14.6067Z"
           fill="${color}"
          stroke="${color}"
          strokeWidth="${thickness}"
        />
      </svg>
     
     `,
  },
];

import { SVGProps } from "react";
// ShowPassword Icon
const ShowPasswordIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    const { width, height, fill, ...rest } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ?? "33"}
            height={height ?? "34"}
            viewBox={`0 0 ${width ?? 33} ${height ?? 34}`}
            fill="none"
            {...rest}
        >
            <path
                d="M3.9074 8.65134C7.53762 2.44955 16.4624 2.44955 20.0926 8.65134C21.3025 10.7182 21.3025 13.2818 20.0926 15.3487C16.4624 21.5504 7.53762 21.5504 3.9074 15.3487C2.69753 13.2818 2.69753 10.7182 3.9074 8.65134Z"
                stroke={fill ?? "#B8B8B8"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5567 12.0607C15.5567 14.0561 13.9637 15.6733 11.9994 15.6733C10.0352 15.6733 8.44336 14.0561 8.44336 12.0607C8.44336 10.0641 10.0352 8.44699 11.9994 8.44699C13.9637 8.44699 15.5567 10.0641 15.5567 12.0607Z"
                stroke={fill ?? "#B8B8B8"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

// HidePassword Icon
const HidePasswordIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    const { width, height, fill, ...rest } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ?? "33"}
            height={height ?? "34"}
            viewBox={`0 0 ${width ?? 33} ${height ?? 34}`}
            fill="none"
            {...rest}
        >
            <path
                d="M20.7399 8.27246C20.5306 7.91498 20.0712 7.79482 19.7137 8.00407C19.3563 8.21332 19.2361 8.67274 19.4453 9.03021L20.7399 8.27246ZM9.16464 18.7776C8.77298 18.6427 8.34619 18.851 8.21137 19.2426C8.07656 19.6343 8.28478 20.0611 8.67645 20.1959L9.16464 18.7776ZM13.9162 9.96831C14.216 10.2542 14.6907 10.2429 14.9766 9.94318C15.2624 9.64343 15.2512 9.16869 14.9514 8.88282L13.9162 9.96831ZM8.7432 14.9157C9.01234 15.2305 9.48577 15.2676 9.80062 14.9985C10.1155 14.7293 10.1525 14.2559 9.8834 13.941L8.7432 14.9157ZM16.3067 12.0607C16.3067 11.6465 15.9709 11.3107 15.5567 11.3107C15.1425 11.3107 14.8067 11.6465 14.8067 12.0607H16.3067ZM11.9994 14.9233C11.5852 14.9233 11.2494 15.2591 11.2494 15.6733C11.2494 16.0875 11.5852 16.4233 11.9994 16.4233V14.9233ZM20.4095 4.52614C20.7001 4.23095 20.6963 3.75609 20.4011 3.46551C20.1059 3.17493 19.6311 3.17867 19.3405 3.47386L20.4095 4.52614ZM4.15301 18.9024C3.86243 19.1976 3.86617 19.6725 4.16136 19.9631C4.45655 20.2536 4.93141 20.2499 5.22199 19.9547L4.15301 18.9024ZM19.4453 9.03021C20.5182 10.8631 20.5182 13.1369 19.4453 14.9698L20.7399 15.7275C22.0867 13.4266 22.0867 10.5734 20.7399 8.27246L19.4453 9.03021ZM19.4453 14.9698C17.2217 18.7686 12.8404 20.0427 9.16464 18.7776L8.67645 20.1959C12.9744 21.6752 18.1274 20.1907 20.7399 15.7275L19.4453 14.9698ZM4.55466 14.9698C3.48178 13.1369 3.48178 10.8631 4.55466 9.03021L3.26013 8.27246C1.91329 10.5734 1.91329 13.4266 3.26013 15.7275L4.55466 14.9698ZM6.45255 17.2388C5.72734 16.6258 5.08181 15.8704 4.55466 14.9698L3.26013 15.7275C3.87315 16.7748 4.62893 17.6614 5.48415 18.3843L6.45255 17.2388ZM4.55466 9.03021C7.26824 4.3944 13.2017 3.51996 17.1232 6.42527L18.0162 5.22C13.4173 1.81293 6.44922 2.8243 3.26013 8.27246L4.55466 9.03021ZM9.19331 12.0607C9.19331 10.467 10.4606 9.19699 11.9994 9.19699V7.69699C9.60973 7.69699 7.69331 9.66125 7.69331 12.0607H9.19331ZM11.9994 9.19699C12.7392 9.19699 13.4126 9.48802 13.9162 9.96831L14.9514 8.88282C14.1822 8.14925 13.1429 7.69699 11.9994 7.69699V9.19699ZM9.8834 13.941C9.45402 13.4387 9.19331 12.7825 9.19331 12.0607H7.69331C7.69331 13.1505 8.08864 14.15 8.7432 14.9157L9.8834 13.941ZM14.8067 12.0607C14.8067 13.6528 13.5387 14.9233 11.9994 14.9233V16.4233C14.3887 16.4233 16.3067 14.4595 16.3067 12.0607H14.8067ZM19.3405 3.47386L4.15301 18.9024L5.22199 19.9547L20.4095 4.52614L19.3405 3.47386Z"
                fill={fill ?? "#B8B8B8"}
            />
        </svg>
    );
};

// Search Icon
const SearchIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    const { width, height, fill, ...rest } = props;
    return (
        <svg
            width={width ?? "33"}
            height={height ?? "34"}
            viewBox={`0 0 ${width ?? 33} ${height ?? 34}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M2.76311 11.4842L3.49329 11.3129L2.76311 11.4842ZM2.76311 6.93667L3.49329 7.10794L2.76311 6.93667ZM15.6578 6.93667L16.3879 6.76539L15.6578 6.93667ZM15.6578 11.4842L16.3879 11.6555L15.6578 11.4842ZM11.4842 15.6578L11.3129 14.9276L11.4842 15.6578ZM6.93667 15.6578L6.76539 16.3879L6.93667 15.6578ZM6.93667 2.76311L6.76539 2.03293V2.03293L6.93667 2.76311ZM11.4842 2.76311L11.6555 2.03293L11.4842 2.76311ZM16.9697 18.0303C17.2626 18.3232 17.7374 18.3232 18.0303 18.0303C18.3232 17.7374 18.3232 17.2626 18.0303 16.9697L16.9697 18.0303ZM3.49329 11.3129C3.1689 9.93004 3.1689 8.49084 3.49329 7.10794L2.03293 6.76539C1.65569 8.3736 1.65569 10.0473 2.03293 11.6555L3.49329 11.3129ZM14.9276 7.10795C15.252 8.49084 15.252 9.93004 14.9276 11.3129L16.3879 11.6555C16.7652 10.0473 16.7652 8.3736 16.3879 6.76539L14.9276 7.10795ZM11.3129 14.9276C9.93004 15.252 8.49084 15.252 7.10795 14.9276L6.76539 16.3879C8.3736 16.7652 10.0473 16.7652 11.6555 16.3879L11.3129 14.9276ZM7.10794 3.49329C8.49084 3.1689 9.93004 3.1689 11.3129 3.49329L11.6555 2.03293C10.0473 1.65569 8.3736 1.65569 6.76539 2.03293L7.10794 3.49329ZM7.10795 14.9276C5.31441 14.5069 3.914 13.1065 3.49329 11.3129L2.03293 11.6555C2.58373 14.0037 4.41721 15.8371 6.76539 16.3879L7.10795 14.9276ZM11.6555 16.3879C14.0037 15.8371 15.8371 14.0037 16.3879 11.6555L14.9276 11.3129C14.5069 13.1065 13.1065 14.5069 11.3129 14.9276L11.6555 16.3879ZM11.3129 3.49329C13.1065 3.91399 14.5069 5.31441 14.9276 7.10795L16.3879 6.76539C15.8371 4.41721 14.0037 2.58373 11.6555 2.03293L11.3129 3.49329ZM6.76539 2.03293C4.41721 2.58373 2.58373 4.41721 2.03293 6.76539L3.49329 7.10794C3.914 5.3144 5.31441 3.91399 7.10794 3.49329L6.76539 2.03293ZM13.9156 14.9763L16.9697 18.0303L18.0303 16.9697L14.9763 13.9156L13.9156 14.9763Z"
                fill={fill ?? "#363853"}
            />
        </svg>
    );
};

// Nav Icon
const NavIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    const { width, height, fill, ...rest } = props;
    return (
        <svg
            width={width ?? "33"}
            height={height ?? "34"}
            viewBox={`0 0 ${width ?? 33} ${height ?? 34}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <rect
                y=".5"
                width={width ?? "33"}
                height={height ?? "34"}
                rx="8"
                fill="#F5F3FF"
            />
            {/*this fill is for specific background*/}
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.25 16.5C7.25 16.0858 7.58579 15.75 8 15.75L23.9996 15.75C24.4138 15.75 24.7496 16.0858 24.7496 16.5C24.7496 16.9142 24.4138 17.25 23.9996 17.25H8C7.58579 17.25 7.25 16.9142 7.25 16.5ZM10.5331 23.5C10.5331 23.0858 10.8689 22.75 11.2831 22.75L24 22.75C24.4142 22.75 24.75 23.0858 24.75 23.5C24.75 23.9142 24.4142 24.25 24 24.25L11.2831 24.25C10.8689 24.25 10.5331 23.9142 10.5331 23.5ZM16.2219 9.5C16.2219 9.08579 16.5577 8.75 16.9719 8.75L24 8.75C24.4142 8.75 24.75 9.08579 24.75 9.5C24.75 9.91421 24.4142 10.25 24 10.25L16.9719 10.25C16.5577 10.25 16.2219 9.91421 16.2219 9.5Z"
                fill={fill ?? "#1C274C"}
            />
        </svg>
    );
};

// Home Icon
const HomeIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    const { width, height, ...rest } = props;

    return (
        <svg
            width={width ?? "33"}
            height={height ?? "34"}
            viewBox={`0 0 ${width ?? 33} ${height ?? 34}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                stroke="#1C274C"
                stroke-width="1.5"
            />
            <path
                d="M15 18H9"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
            />
        </svg>
    );
};

// Event Icon
const EventsIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    const { width, height, ...rest } = props;

    return (
        <svg
            width={width ?? "33"}
            height={height ?? "34"}
            viewBox={`0 0 ${width ?? 33} ${height ?? 34}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16 4.00195C18.175 4.01406 19.3529 4.11051 20.1213 4.87889C21 5.75757 21 7.17179 21 10.0002V16.0002C21 18.8286 21 20.2429 20.1213 21.1215C19.2426 22.0002 17.8284 22.0002 15 22.0002H9C6.17157 22.0002 4.75736 22.0002 3.87868 21.1215C3 20.2429 3 18.8286 3 16.0002V10.0002C3 7.17179 3 5.75757 3.87868 4.87889C4.64706 4.11051 5.82497 4.01406 8 4.00195"
                stroke="#1C274C"
                stroke-width="1.5"
            />
            <path
                d="M10.5 14L17 14"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
            />
            <path
                d="M7 14H7.5"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
            />
            <path
                d="M7 10.5H7.5"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
            />
            <path
                d="M7 17.5H7.5"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
            />
            <path
                d="M10.5 10.5H17"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
            />
            <path
                d="M10.5 17.5H17"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
            />
            <path
                d="M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z"
                stroke="#1C274C"
                stroke-width="1.5"
            />
        </svg>
    );
};

// Alumnus Icon

const AlumnusIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    const { width, height, ...rest } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            width={width ?? "33"}
            height={height ?? "34"}
            viewBox={`0 0 ${width ?? 33} ${height ?? 34}`}
            fill="#1C274C"
        >
            <path d="m22.004,4.498c.001-.865-.525-1.61-1.34-1.898L14.199.319c-1.388-.491-2.916-.492-4.303-.006L3.353,2.603c-.818.286-1.346,1.03-1.346,1.896,0,.867.529,1.611,1.347,1.896l2.646.923v1.682c0,3.309,2.691,6,6,6s6-2.691,6-6v-1.682l2-.698v4.379c0,.552.448,1,1,1s1-.448,1-1v-6.477c0-.009.004-.016.004-.025Zm-6.004,4.502c0,2.206-1.794,4-4,4s-4-1.794-4-4v-.984l1.861.649c.689.24,1.414.361,2.138.361s1.448-.121,2.137-.361l1.864-.65v.984Zm-2.522-2.223c-.953.333-2.004.333-2.957,0l-6.507-2.287,6.544-2.29h0c.478-.167.979-.251,1.482-.251.506,0,1.012.085,1.494.255l6.465,2.298-6.521,2.274Zm6.478,15.926c.164.527-.131,1.088-.658,1.252-.099.031-.199.045-.297.045-.426,0-.821-.275-.955-.704-.787-2.53-3.272-4.297-6.045-4.297s-5.258,1.767-6.045,4.297c-.164.528-.728.821-1.252.658-.527-.164-.822-.725-.658-1.252,1.044-3.358,4.315-5.703,7.955-5.703s6.911,2.345,7.955,5.703Z" />
        </svg>
    );
};

// Funraising Icon
const FundraisingIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    const { width, height, ...rest } = props;
    return (
        <svg
            width={width ?? "33"}
            height={height ?? "34"}
            viewBox={`0 0 ${width ?? 33} ${height ?? 34}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17.4142 10.4142C18 9.82843 18 8.88562 18 7C18 5.11438 18 4.17157 17.4142 3.58579M17.4142 10.4142C16.8284 11 15.8856 11 14 11H10C8.11438 11 7.17157 11 6.58579 10.4142M17.4142 10.4142C17.4142 10.4142 17.4142 10.4142 17.4142 10.4142ZM17.4142 3.58579C16.8284 3 15.8856 3 14 3L10 3C8.11438 3 7.17157 3 6.58579 3.58579M17.4142 3.58579C17.4142 3.58579 17.4142 3.58579 17.4142 3.58579ZM6.58579 3.58579C6 4.17157 6 5.11438 6 7C6 8.88562 6 9.82843 6.58579 10.4142M6.58579 3.58579C6.58579 3.58579 6.58579 3.58579 6.58579 3.58579ZM6.58579 10.4142C6.58579 10.4142 6.58579 10.4142 6.58579 10.4142Z"
                stroke="#1C274C"
                stroke-width="1.5"
            />
            <path
                d="M13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7Z"
                stroke="#1C274C"
                stroke-width="1.5"
            />
            <path
                d="M18 6C16.3431 6 15 4.65685 15 3"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
            />
            <path
                d="M18 8C16.3431 8 15 9.34315 15 11"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
            />
            <path
                d="M6 6C7.65685 6 9 4.65685 9 3"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
            />
            <path
                d="M6 8C7.65685 8 9 9.34315 9 11"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
            />
            <path
                d="M5 20.3884H7.25993C8.27079 20.3884 9.29253 20.4937 10.2763 20.6964C12.0166 21.0549 13.8488 21.0983 15.6069 20.8138C16.4738 20.6734 17.326 20.4589 18.0975 20.0865C18.7939 19.7504 19.6469 19.2766 20.2199 18.7459C20.7921 18.216 21.388 17.3487 21.8109 16.6707C22.1736 16.0894 21.9982 15.3762 21.4245 14.943C20.7873 14.4619 19.8417 14.462 19.2046 14.9433L17.3974 16.3084C16.697 16.8375 15.932 17.3245 15.0206 17.4699C14.911 17.4874 14.7962 17.5033 14.6764 17.5172M14.6764 17.5172C14.6403 17.5214 14.6038 17.5254 14.5668 17.5292M14.6764 17.5172C14.8222 17.486 14.9669 17.396 15.1028 17.2775C15.746 16.7161 15.7866 15.77 15.2285 15.1431C15.0991 14.9977 14.9475 14.8764 14.7791 14.7759C11.9817 13.1074 7.62942 14.3782 5 16.2429M14.6764 17.5172C14.6399 17.525 14.6033 17.5292 14.5668 17.5292M14.5668 17.5292C14.0434 17.5829 13.4312 17.5968 12.7518 17.5326"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
            />
            <rect
                x="2"
                y="14"
                width="3"
                height="8"
                rx="1.5"
                stroke="#1C274C"
                stroke-width="1.5"
            />
        </svg>
    );
};

// Mentorship Icon
const MentorshipIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    const { width, height, fill, ...rest } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            width={width ?? "33"}
            height={height ?? "34"}
            viewBox={`0 0 ${width ?? 33} ${height ?? 34}`}
            fill="#1C274C"
        >
            <path d="m2,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm4,12.5H2v-6c0-.551.448-1,1-1h12v-2H3c-1.654,0-3,1.346-3,3v8h2v7h2v-7h2v7h2v-14h-2v5ZM21,0h-12.76c.391.584.64,1.267.722,2h12.038c.552,0,1,.449,1,1v10h-3v-2h-4v2h-5v2h14V3c0-1.654-1.346-3-3-3Z" />
        </svg>
    );
};
// Setting Icon
const SettingIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    const { width, height, fill, ...rest } = props;
    return (
        <svg
            width={width ?? "33"}
            height={height ?? "34"}
            viewBox={`0 0 ${width ?? 33} ${height ?? 34}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 8.25C9.92894 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92894 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
                fill="#1C274C"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9747 1.25C11.5303 1.24999 11.1592 1.24999 10.8546 1.27077C10.5375 1.29241 10.238 1.33905 9.94761 1.45933C9.27379 1.73844 8.73843 2.27379 8.45932 2.94762C8.31402 3.29842 8.27467 3.66812 8.25964 4.06996C8.24756 4.39299 8.08454 4.66251 7.84395 4.80141C7.60337 4.94031 7.28845 4.94673 7.00266 4.79568C6.64714 4.60777 6.30729 4.45699 5.93083 4.40743C5.20773 4.31223 4.47642 4.50819 3.89779 4.95219C3.64843 5.14353 3.45827 5.3796 3.28099 5.6434C3.11068 5.89681 2.92517 6.21815 2.70294 6.60307L2.67769 6.64681C2.45545 7.03172 2.26993 7.35304 2.13562 7.62723C1.99581 7.91267 1.88644 8.19539 1.84541 8.50701C1.75021 9.23012 1.94617 9.96142 2.39016 10.5401C2.62128 10.8412 2.92173 11.0602 3.26217 11.2741C3.53595 11.4461 3.68788 11.7221 3.68786 12C3.68785 12.2778 3.53592 12.5538 3.26217 12.7258C2.92169 12.9397 2.62121 13.1587 2.39007 13.4599C1.94607 14.0385 1.75012 14.7698 1.84531 15.4929C1.88634 15.8045 1.99571 16.0873 2.13552 16.3727C2.26983 16.6469 2.45535 16.9682 2.67758 17.3531L2.70284 17.3969C2.92507 17.7818 3.11058 18.1031 3.28089 18.3565C3.45817 18.6203 3.64833 18.8564 3.89769 19.0477C4.47632 19.4917 5.20763 19.6877 5.93073 19.5925C6.30717 19.5429 6.647 19.3922 7.0025 19.2043C7.28833 19.0532 7.60329 19.0596 7.8439 19.1986C8.08452 19.3375 8.24756 19.607 8.25964 19.9301C8.27467 20.3319 8.31403 20.7016 8.45932 21.0524C8.73843 21.7262 9.27379 22.2616 9.94761 22.5407C10.238 22.661 10.5375 22.7076 10.8546 22.7292C11.1592 22.75 11.5303 22.75 11.9747 22.75H12.0252C12.4697 22.75 12.8407 22.75 13.1454 22.7292C13.4625 22.7076 13.762 22.661 14.0524 22.5407C14.7262 22.2616 15.2616 21.7262 15.5407 21.0524C15.686 20.7016 15.7253 20.3319 15.7403 19.93C15.7524 19.607 15.9154 19.3375 16.156 19.1985C16.3966 19.0596 16.7116 19.0532 16.9974 19.2042C17.3529 19.3921 17.6927 19.5429 18.0692 19.5924C18.7923 19.6876 19.5236 19.4917 20.1022 19.0477C20.3516 18.8563 20.5417 18.6203 20.719 18.3565C20.8893 18.1031 21.0748 17.7818 21.297 17.3969L21.3223 17.3531C21.5445 16.9682 21.7301 16.6468 21.8644 16.3726C22.0042 16.0872 22.1135 15.8045 22.1546 15.4929C22.2498 14.7697 22.0538 14.0384 21.6098 13.4598C21.3787 13.1586 21.0782 12.9397 20.7378 12.7258C20.464 12.5538 20.3121 12.2778 20.3121 11.9999C20.3121 11.7221 20.464 11.4462 20.7377 11.2742C21.0783 11.0603 21.3788 10.8414 21.6099 10.5401C22.0539 9.96149 22.2499 9.23019 22.1547 8.50708C22.1136 8.19546 22.0043 7.91274 21.8645 7.6273C21.7302 7.35313 21.5447 7.03183 21.3224 6.64695L21.2972 6.60318C21.0749 6.21825 20.8894 5.89688 20.7191 5.64347C20.5418 5.37967 20.3517 5.1436 20.1023 4.95225C19.5237 4.50826 18.7924 4.3123 18.0692 4.4075C17.6928 4.45706 17.353 4.60782 16.9975 4.79572C16.7117 4.94679 16.3967 4.94036 16.1561 4.80144C15.9155 4.66253 15.7524 4.39297 15.7403 4.06991C15.7253 3.66808 15.686 3.2984 15.5407 2.94762C15.2616 2.27379 14.7262 1.73844 14.0524 1.45933C13.762 1.33905 13.4625 1.29241 13.1454 1.27077C12.8407 1.24999 12.4697 1.24999 12.0252 1.25H11.9747ZM10.5216 2.84515C10.5988 2.81319 10.716 2.78372 10.9567 2.76729C11.2042 2.75041 11.5238 2.75 12 2.75C12.4762 2.75 12.7958 2.75041 13.0432 2.76729C13.284 2.78372 13.4012 2.81319 13.4783 2.84515C13.7846 2.97202 14.028 3.21536 14.1548 3.52165C14.1949 3.61826 14.228 3.76887 14.2414 4.12597C14.271 4.91835 14.68 5.68129 15.4061 6.10048C16.1321 6.51968 16.9974 6.4924 17.6984 6.12188C18.0143 5.9549 18.1614 5.90832 18.265 5.89467C18.5937 5.8514 18.9261 5.94047 19.1891 6.14228C19.2554 6.19312 19.3395 6.27989 19.4741 6.48016C19.6125 6.68603 19.7726 6.9626 20.0107 7.375C20.2488 7.78741 20.4083 8.06438 20.5174 8.28713C20.6235 8.50382 20.6566 8.62007 20.6675 8.70287C20.7108 9.03155 20.6217 9.36397 20.4199 9.62698C20.3562 9.70995 20.2424 9.81399 19.9397 10.0041C19.2684 10.426 18.8122 11.1616 18.8121 11.9999C18.8121 12.8383 19.2683 13.574 19.9397 13.9959C20.2423 14.186 20.3561 14.29 20.4198 14.373C20.6216 14.636 20.7107 14.9684 20.6674 15.2971C20.6565 15.3799 20.6234 15.4961 20.5173 15.7128C20.4082 15.9355 20.2487 16.2125 20.0106 16.6249C19.7725 17.0373 19.6124 17.3139 19.474 17.5198C19.3394 17.72 19.2553 17.8068 19.189 17.8576C18.926 18.0595 18.5936 18.1485 18.2649 18.1053C18.1613 18.0916 18.0142 18.045 17.6983 17.8781C16.9973 17.5075 16.132 17.4803 15.4059 17.8995C14.68 18.3187 14.271 19.0816 14.2414 19.874C14.228 20.2311 14.1949 20.3817 14.1548 20.4784C14.028 20.7846 13.7846 21.028 13.4783 21.1549C13.4012 21.1868 13.284 21.2163 13.0432 21.2327C12.7958 21.2496 12.4762 21.25 12 21.25C11.5238 21.25 11.2042 21.2496 10.9567 21.2327C10.716 21.2163 10.5988 21.1868 10.5216 21.1549C10.2154 21.028 9.97201 20.7846 9.84514 20.4784C9.80512 20.3817 9.77195 20.2311 9.75859 19.874C9.72896 19.0817 9.31997 18.3187 8.5939 17.8995C7.86784 17.4803 7.00262 17.5076 6.30158 17.8781C5.98565 18.0451 5.83863 18.0917 5.73495 18.1053C5.40626 18.1486 5.07385 18.0595 4.81084 17.8577C4.74458 17.8069 4.66045 17.7201 4.52586 17.5198C4.38751 17.314 4.22736 17.0374 3.98926 16.625C3.75115 16.2126 3.59171 15.9356 3.4826 15.7129C3.37646 15.4962 3.34338 15.3799 3.33248 15.2971C3.28921 14.9684 3.37828 14.636 3.5801 14.373C3.64376 14.2901 3.75761 14.186 4.0602 13.9959C4.73158 13.5741 5.18782 12.8384 5.18786 12.0001C5.18791 11.1616 4.73165 10.4259 4.06021 10.004C3.75769 9.81389 3.64385 9.70987 3.58019 9.62691C3.37838 9.3639 3.28931 9.03149 3.33258 8.7028C3.34348 8.62001 3.37656 8.50375 3.4827 8.28707C3.59181 8.06431 3.75125 7.78734 3.98935 7.37493C4.22746 6.96253 4.3876 6.68596 4.52596 6.48009C4.66055 6.27983 4.74468 6.19305 4.81093 6.14222C5.07395 5.9404 5.40636 5.85133 5.73504 5.8946C5.83873 5.90825 5.98576 5.95483 6.30173 6.12184C7.00273 6.49235 7.86791 6.51962 8.59394 6.10045C9.31998 5.68128 9.72896 4.91837 9.75859 4.12602C9.77195 3.76889 9.80512 3.61827 9.84514 3.52165C9.97201 3.21536 10.2154 2.97202 10.5216 2.84515Z"
                fill="#1C274C"
            />
        </svg>
    );
};

//Logout Icon
const LogoutIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    const { width, height, fill, ...rest } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            width={width ?? "30"}
            height={height ?? "31"}
            viewBox={`0 0 ${width ?? 33} ${height ?? 34}`}
            fill="#1C274C"
        >
            <path d="M11.476,15a1,1,0,0,0-1,1v3a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7.476a3,3,0,0,1,3,3V8a1,1,0,0,0,2,0V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7.476a5.006,5.006,0,0,0,5-5V16A1,1,0,0,0,11.476,15Z" />
            <path d="M22.867,9.879,18.281,5.293a1,1,0,1,0-1.414,1.414l4.262,4.263L6,11a1,1,0,0,0,0,2H6l15.188-.031-4.323,4.324a1,1,0,1,0,1.414,1.414l4.586-4.586A3,3,0,0,0,22.867,9.879Z" />
        </svg>
    );
};
//Login Icon
const LoginIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    const { width, height, fill, ...rest } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            width={width ?? "30"}
            height={height ?? "31"}
            viewBox={`0 0 ${width ?? 33} ${height ?? 34}`}
            fill="#1C274C"
        >
            <path d="M18.9,0H5.1A5.055,5.055,0,0,0,0,5V8A1,1,0,0,0,2,8V5A3.054,3.054,0,0,1,5.1,2H18.9A3.054,3.054,0,0,1,22,5V19a3.054,3.054,0,0,1-3.1,3H5.1A3.054,3.054,0,0,1,2,19V16a1,1,0,0,0-2,0v3a5.055,5.055,0,0,0,5.1,5H18.9A5.055,5.055,0,0,0,24,19V5A5.055,5.055,0,0,0,18.9,0Z" />
            <path d="M3,12a1,1,0,0,0,1,1H4l13.188-.03-4.323,4.323a1,1,0,1,0,1.414,1.414l4.586-4.586a3,3,0,0,0,0-4.242L14.281,5.293a1,1,0,0,0-1.414,1.414l4.262,4.263L4,11A1,1,0,0,0,3,12Z" />
        </svg>
    );
};
//Blog Icon
const BlogIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    const { width, height, fill, ...rest } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            width={width ?? "30"}
            height={height ?? "31"}
            viewBox={`0 0 ${width ?? 33} ${height ?? 34}`}
            fill="#1C274C"
        >
            <path d="m19,0h-9c-2.757,0-5,2.243-5,5v1h-.5c-2.481,0-4.5,2.019-4.5,4.5v10c0,1.929,1.569,3.499,3.499,3.5h15.501c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5ZM5,20.5c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5v-10c0-1.378,1.122-2.5,2.5-2.5h.5v12.5Zm17-1.5c0,1.654-1.346,3-3,3H6.662c.216-.455.338-.963.338-1.5V5c0-1.654,1.346-3,3-3h9c1.654,0,3,1.346,3,3v14Zm-2-12c0,.552-.448,1-1,1h-3c-.552,0-1-.448-1-1s.448-1,1-1h3c.552,0,1,.448,1,1Zm0,4c0,.552-.448,1-1,1h-9c-.552,0-1-.448-1-1s.448-1,1-1h9c.552,0,1,.448,1,1Zm0,4c0,.552-.448,1-1,1h-9c-.552,0-1-.448-1-1s.448-1,1-1h9c.552,0,1,.448,1,1Zm0,4c0,.552-.448,1-1,1h-9c-.552,0-1-.448-1-1s.448-1,1-1h9c.552,0,1,.448,1,1ZM9,7v-2c0-.552.448-1,1-1h2c.552,0,1,.448,1,1v2c0,.552-.448,1-1,1h-2c-.552,0-1-.448-1-1Z" />
        </svg>
    );
};

//Jobs Icon
const JobsIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    const { width, height, fill, ...rest } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            width={width ?? "30"}
            height={height ?? "31"}
            viewBox={`0 0 ${width ?? 33} ${height ?? 34}`}
            fill="#1C274C"
        >
            <path d="M19,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H5A5.006,5.006,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A5.006,5.006,0,0,0,19,4ZM11,2h2a3,3,0,0,1,2.816,2H8.184A3,3,0,0,1,11,2ZM5,6H19a3,3,0,0,1,3,3v3H2V9A3,3,0,0,1,5,6ZM19,22H5a3,3,0,0,1-3-3V14h9v1a1,1,0,0,0,2,0V14h9v5A3,3,0,0,1,19,22Z" />
        </svg>
    );
};

//Alumni Association Icon
const AlumniAssociationIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    const { width, height, fill, ...rest } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            width={width ?? "30"}
            height={height ?? "31"}
            viewBox={`0 0 ${width ?? 33} ${height ?? 34}`}
            fill="#1C274C"
        >
            <path d="m.213,9.145c-.341-.435-.264-1.063.171-1.404L8.919,1.062c1.814-1.419,4.348-1.42,6.162,0l8.535,6.679c.435.34.512.969.171,1.404-.197.252-.491.384-.788.384-.215,0-.433-.069-.615-.212L13.849,2.638c-1.088-.852-2.609-.852-3.697,0L1.616,9.316c-.436.34-1.063.262-1.403-.171Zm3.524,8.89c-2.166.591-3.737,2.679-3.737,4.965,0,.553.447,1,1,1s1-.447,1-1c0-1.379.973-2.684,2.263-3.035.533-.146.848-.695.702-1.228-.146-.534-.699-.847-1.228-.702Zm16.525,0c-.526-.146-1.082.168-1.228.702-.146.532.169,1.082.702,1.228,1.29.352,2.263,1.656,2.263,3.035,0,.553.447,1,1,1s1-.447,1-1c0-2.286-1.571-4.374-3.737-4.965Zm-15.763-7.035c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5-1.119-2.5-2.5-2.5Zm17.5,2.5c0-1.381-1.119-2.5-2.5-2.5s-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5Zm-10-5.5c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5-1.119-2.5-2.5-2.5Zm0,7c-2.757,0-5,2.243-5,5v3c0,.553.447,1,1,1s1-.447,1-1v-3c0-1.654,1.346-3,3-3s3,1.346,3,3v3c0,.553.447,1,1,1s1-.447,1-1v-3c0-2.757-2.243-5-5-5Z" />
        </svg>
    );
};

export {
    ShowPasswordIcon,
    HidePasswordIcon,
    SearchIcon,
    NavIcon,
    HomeIcon,
    EventsIcon,
    AlumnusIcon,
    FundraisingIcon,
    MentorshipIcon,
    SettingIcon,
    LogoutIcon,
    LoginIcon,
    BlogIcon,
    JobsIcon,
    AlumniAssociationIcon,
};

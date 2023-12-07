import './scss/components/_dark-mode-switch.scss';
const DarkModeSwitch = (props) => {
    function toggleDarkMode() {
        document.body.classList.toggle('-dark-mode');
    }
    return (
        <button
            className="dark-mode-btn js-dark-mode-btn btn-reset"
            onClick={toggleDarkMode}

        >
            <span className="visually-hidden">dark mode switch</span>
            <svg viewBox="0 0 73.5 152.5">
                <g>
                    <path fill="currentColor" d="M27.067 82.4v2.8c0 5-2 9.7-5.5 13.1-4.4 4.2-6.8 9.8-6.8 15.9 0 12.1 9.9 22 22 21.9.8 0 1.7 0 2.5-.1 10.5-1.2 18.8-10 19.4-20.6.3-6.4-2.1-12.6-6.7-17-3.6-3.5-5.7-8.3-5.7-13.2v-2.8c0-3-2.4-5.4-5.4-5.4h-8.4c-2.9-.1-5.4 2.4-5.4 5.4zm4 0c0-.8.6-1.4 1.4-1.4h8.4c.8 0 1.4.6 1.4 1.4v2.8c0 6 2.5 11.8 6.9 16.1 3.7 3.6 5.7 8.7 5.4 13.9-.5 8.7-7.3 15.9-15.9 16.9-.7.1-1.4.1-2.1.1-9.9 0-18-8-18-18 0-5 2-9.6 5.6-13 4.3-4.1 6.8-9.9 6.7-16l.2-2.8z"/>
                    <path fill="currentColor" d="M30.167 75h13c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-13c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
                    <path fill="currentColor" d="M28.667 68.7c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-13c-.8 0-1.5.7-1.5 1.5z"/>
                    <path fill="currentColor" className="ray" d="M72.067 114.2h-8.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h8.6c.8 0 1.5-.7 1.5-1.5 0-.9-.7-1.5-1.5-1.5z"/>
                    <path fill="currentColor" className="ray" d="M-.033 115.8c0 .8.7 1.5 1.5 1.5h8.6c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-8.6c-.8 0-1.5.6-1.5 1.5z"/>
                    <path fill="currentColor" className="ray" d="M38.267 151v-8.6c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v8.6c0 .8.7 1.5 1.5 1.5.9 0 1.5-.7 1.5-1.5z"/>
                    <path fill="currentColor" className="ray" d="m12.967 141.7 6.1-6.1c.6-.6.6-1.5 0-2.1-.3-.3-.7-.4-1.1-.4-.4 0-.8.1-1.1.4l-6.1 6.1c-.6.6-.6 1.5 0 2.1.6.6 1.6.6 2.2 0z"/>
                    <path fill="currentColor" className="ray" d="M54.467 97.9c.6.6 1.5.6 2.1 0l6.1-6.1c.6-.6.6-1.5 0-2.1-.3-.3-.7-.4-1.1-.4-.4 0-.8.1-1.1.4l-6.1 6.1c-.4.6-.4 1.5.1 2.1z"/>
                    <path fill="currentColor" className="ray" d="M56.667 133.4c-.3-.3-.7-.4-1.1-.4-.4 0-.8.1-1.1.4-.6.6-.6 1.5 0 2.1l6.1 6.1c.6.6 1.5.6 2.1 0 .6-.6.6-1.5 0-2.1l-6-6.1z"/>
                    <path fill="currentColor" className="ray" d="M12.867 89.7c-.3-.3-.7-.4-1.1-.4-.4 0-.8.1-1.1.4-.6.6-.6 1.5 0 2.1l6.1 6.1c.6.6 1.5.6 2.1 0s.6-1.5 0-2.1l-6-6.1z"/>
                    <path fill="currentColor" d="M31.967 64c0 .8.7 1.5 1.5 1.5h6.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.5c-.9 0-1.5.6-1.5 1.5z"/>
                </g>
                <path fill="currentColor" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" d="M36.7 59.1V0"/>
            </svg>

        </button>
    );
};

export default DarkModeSwitch;

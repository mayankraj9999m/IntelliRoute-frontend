/**
 * Get a cookie value by name
 * @param {string} name - The name of the cookie
 * @returns {string|null} - The cookie value or null if not found
 */
export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        const cookieValue = parts.pop().split(';').shift();
        // Decode URL-encoded cookie value
        return decodeURIComponent(cookieValue);
    }
    return null;
};

/**
 * Get the userName from cookie
 * @returns {string|null} - The user name or null if not found
 */
export const getUserNameFromCookie = () => {
    return getCookie('userName');
};

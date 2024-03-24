export function deleteAllCookies() {
    // Get all cookies
    const cookies = document.cookie.split(";");

    // Iterate through each cookie
    for (const cookie of cookies) {
        // Split the cookie into name and value
        const [cookieName, _] = cookie.split("=");

        // Trim any whitespace from the cookie name
        const trimmedCookieName = cookieName.trim();

        // Validate the cookie name to avoid injection attacks
        if (/^[a-zA-Z0-9_-]+$/.test(trimmedCookieName)) {
            // Set the expiration date to a past date to delete the cookie
            document.cookie = `${trimmedCookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        }
    }
}

export function clearStorageAndCookies() {
    // Clear session storage
    sessionStorage.clear();

    // Clear local storage
    localStorage.clear();

    // clear cookies
    deleteAllCookies();

    console.log("user logged out!");
}
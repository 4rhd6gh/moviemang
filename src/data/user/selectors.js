export const getUser = (state) => state.user.userData;
export const getError = (state) => state.user.hasError;
export const getErrorMessage = (state) => state.user.errorMessage;
export const getAccessToken = (state) => state.user.accessToken;
export const getRefreshToken = (state) => state.user.refreshToken;

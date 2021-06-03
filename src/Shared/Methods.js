export const convertDateTime = dateTime => {
    return new Date(dateTime).toLocaleTimeString('en-US', { timeStyle: 'short' });
}

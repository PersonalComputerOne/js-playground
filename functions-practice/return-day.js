function returnDay(day) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (day <= 0 || day >= 8) {
        return null;
    }
    return days[day - 1];
}

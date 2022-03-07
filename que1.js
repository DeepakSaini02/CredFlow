// Given arrival and departure times of all trains that reach a railway station.Find the
// minimum number of platforms required for the railway station so that no train is kept
// waiting.Consider that all the trains arrive on the same day and leave on the same
// day.Arrival and departure time can never be the same for a train but we can have
// the arrival time of one train equal to the departure time of the other.At any given
// instance of time, the same platform can not be used for both departures of a train
// and the arrival of another train.In such cases, we need different platforms.





// let arrival = [1, 2, 3, 4, 5]
// let departure = [2, 5, 4, 6, 7]

function railway(arrival, departure, n) {
    arrival.sort((a, b) => a - b)
    departure.sort((a, b) => a - b)
    let i = 1;
    let j = 0;
    let count = 1;
    let ans = 1

    if (n == 0)
        return 0;

    while (i < n && j < n) {
        if (arrival[i] <= departure[j]) {
            count++;
            i++
        } else if (arrival[i] > departure[j]) {
            count--
            j++
        }
        ans = Math.max(count, ans)
    }
    return ans
}

console.log(railway(arrival, departure, 4));
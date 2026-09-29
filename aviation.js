let FlightData = [["N/A","N/A","N/A","N/A","N/A"],["N/A","N/A","N/A","N/A","N/A"],["N/A","N/A","N/A","N/A","N/A"]];
let Key = "7623f170211a97a9a3ece38162174fd3";
let API = "https://api.aviationstack.com/v1/flights";
const Options = {method: 'GET', headers: {Accept: 'application/json'}};

async function GetAirport(){
    alert("Looking up five latest departures");
    API = "https://api.aviationstack.com/v1/flights?&limit=100&access_key=7623f170211a97a9a3ece38162174fd3";
    try {
        let Response = await fetch(API, Options);
        let Data = await Response.json();
        console.log(Data);
        FlightData[0][0] = Data["data"][0]["departure"]["airport"];
        FlightData[1][0] = Data["data"][0]["arrival"]["airport"];
        FlightData[2][0] = Data["data"][0]["flight_date"];
        
        FlightData[0][1] = Data["data"][1]["departure"]["airport"];
        FlightData[1][1] = Data["data"][1]["arrival"]["airport"];
        FlightData[2][1] = Data["data"][1]["flight_date"];

        FlightData[0][2] = Data["data"][2]["departure"]["airport"];
        FlightData[1][2] = Data["data"][2]["arrival"]["airport"];
        FlightData[2][2] = Data["data"][2]["flight_date"];

        FlightData[0][3] = Data["data"][3]["departure"]["airport"];
        FlightData[1][3] = Data["data"][3]["arrival"]["airport"];
        FlightData[2][3] = Data["data"][3]["flight_date"];

        FlightData[0][4] = Data["data"][4]["departure"]["airport"];
        FlightData[1][4] = Data["data"][4]["arrival"]["airport"];
        FlightData[2][4] = Data["data"][4]["flight_date"];
        } catch (error) {
            console.error(error);
    }

    document.getElementById("DFlight1").textContent = FlightData[0][0];
    document.getElementById("DGoing1").textContent = FlightData[1][0];
    document.getElementById("DTime1").textContent = FlightData[2][0];

    document.getElementById("DFlight2").textContent = FlightData[0][1];
    document.getElementById("DGoing2").textContent = FlightData[1][1];
    document.getElementById("DTime2").textContent = FlightData[2][1];

    document.getElementById("DFlight3").textContent = FlightData[0][2];
    document.getElementById("DGoing3").textContent = FlightData[1][2];
    document.getElementById("DTime3").textContent = FlightData[2][2];

    document.getElementById("DFlight4").textContent = FlightData[0][3];
    document.getElementById("DGoing4").textContent = FlightData[1][3];
    document.getElementById("DTime4").textContent = FlightData[2][3];

    document.getElementById("DFlight5").textContent = FlightData[0][4];
    document.getElementById("DGoing5").textContent = FlightData[1][4];
    document.getElementById("DTime5").textContent = FlightData[2][4];
}

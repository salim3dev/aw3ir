import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class MeteoService {
    constructor() { }

    getMeteo(name: string): Promise<any> {
        console.log("from service", name);

        return fetch(
            "https://api.openweathermap.org/data/2.5/weather/?q=" +
            name +
            "&units=metric&lang=fr&appid=bb796d87af0ecef6d855b096cddf28a4"
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                // test du code retour
                // 200 = OK
                // 404 = city not found
                if (json.cod == 200) {
                    return Promise.resolve(json);
                } else {
                    console.error(
                        "Météo introuvable pour " + name + " (" + json.message + ")"
                    );

                    return Promise.reject(
                        "Météo introuvable pour " + name + " (" + json.message + ")"
                    );
                }
            });
    }
}
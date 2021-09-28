import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('address.db')

export const init = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`CREATE TABLE IF NOT EXISTS adress (
                    id INTEGER PRIMARY KEY NOT NULL,
                    title TEXT NOT NULL,
                    image TEXT NOT NULL,
                    address TEXT NOT NULL,
                    lat REAL NOT NULL,
                    lng REAL NOT NULL)`,
                [],
                () => resolve(),
                (_, err) => reject(err),
            )
        },
        );

    });
}

export const insertAddress = (
    title,
    image,
    address,
    lat,
    lng,
) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO address (title, image, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
                [title, image, address, lat, lng],
                (_, result) => resolve(result),
                (_, error) => reject(error),
            )
        })
    })

}


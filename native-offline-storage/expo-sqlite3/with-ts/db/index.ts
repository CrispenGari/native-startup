import * as SQLite from "expo-sqlite";
import { Platform } from "react-native";

const openDatabase = (databaseName: string) => {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }
  const db = SQLite.openDatabase(databaseName);
  return db;
};

const databaseName = "todos.db";
export const db = openDatabase(databaseName);

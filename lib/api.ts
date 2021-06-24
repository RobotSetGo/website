import { google } from "googleapis";

export async function getSettings() {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "Sheet1",
    });

    const rows = response.data.values;

    if (rows.length) {
      return rows.map((row) => ({
        title: row[0],
        description: row[1],
      }));
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}

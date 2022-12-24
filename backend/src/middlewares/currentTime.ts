import moment from "moment-timezone";

export function getCurrentTime(): string {
  return moment().tz('America/Sao_Paulo').format('DD-MM-YYYY HH:mm');
}
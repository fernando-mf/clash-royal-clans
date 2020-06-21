import { GetClan, GetClanWarlog } from './ClashRoyale/Api'
import { GetInactiveMembers } from './UseCase/GetInactiveMembers'
import { GetNoWarMembers } from './UseCase/GetNoWarMembers'
import { ParseCRDate } from './Utils/Date'

async function Main() {
  const inactiveMembers = await GetNoWarMembers('PRJPPR9L')

  console.log(inactiveMembers)
}

Main()

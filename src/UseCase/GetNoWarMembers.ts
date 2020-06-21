import { GetClanWarlog, GetClan } from '../ClashRoyale/Api'
import { GetMembersWithNoParticipation, GetLastClanWar } from '../Domain/Clan'

export async function GetNoWarMembers(clanTag: string) {
  const clan = await GetClan(clanTag)
  if (!clan) {
    return
  }

  const warlog = await GetClanWarlog(clanTag)

  return GetMembersWithNoParticipation(clan.memberList, GetLastClanWar(warlog!))
}

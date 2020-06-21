import { ClanMember, ClanWar, ClanWarlog } from '../ClashRoyale/Models'
import { DaysToMs, ParseCRDate } from '../Utils/Date'
import { CONFIG } from '../Config'

export function GetClanInactiveMembers(
  members: ClanMember[],
  maxInactiveDays: number,
) {
  return members.filter(
    member =>
      ParseCRDate(member.lastSeen).getTime() <
      Date.now() - DaysToMs(maxInactiveDays),
  )
}

export function GetMembersWithNoParticipation(
  members: ClanMember[],
  war: ClanWar,
) {
  return members.filter(
    member =>
      !war.participants.find(participant => participant.tag === member.tag),
  )
}

export function SortClanWarsByDate(warlog: ClanWarlog) {
  return warlog.items.sort((war1, war2) =>
    ParseCRDate(war1.createdDate) > ParseCRDate(war2.createdDate) ? -1 : 1,
  )
}

export function GetLastClanWar(warlog: ClanWarlog) {
  return SortClanWarsByDate(warlog)[0]
}

export function GetInactiveMembersWithNoParticipation(
  members: ClanMember[],
  warlog: ClanWarlog[],
  maxInactiveDays = CONFIG.MAX_INACTIVE_DAYS,
  numberOfLastWars: number,
) {
  const inactiveMembers = GetClanInactiveMembers(members, maxInactiveDays)
}

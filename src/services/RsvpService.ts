import { RsvpEntry, RsvpStatus, Player } from '../models/RsvpTypes';
import { Logger } from '../utils/Logger';

export class RsvpService {
  private entries = new Map<string, RsvpEntry>();

  constructor(private logger: Logger) {}

  addOrUpdate(player: Player, status: RsvpStatus): void {
    this.entries.set(player.id, { player, status });
    this.logger.log(`RSVP for ${player.name} updated to ${status}`);
  }

  getConfirmedAttendees(): Player[] {
    return Array.from(this.entries.values())
      .filter(entry => entry.status === 'Yes')
      .map(entry => entry.player);
  }

  countStatuses(): { total: number; confirmed: number; declined: number } {
    const all = Array.from(this.entries.values());
    return {
      total: all.length,
      confirmed: all.filter(e => e.status === 'Yes').length,
      declined: all.filter(e => e.status === 'No').length
    };
  }
}

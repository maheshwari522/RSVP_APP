import { RsvpService } from './RsvpService';
import { Player } from '../models/RsvpTypes';

const mockLogger = {
  log: jest.fn()
};

describe('RsvpService', () => {
  let service: RsvpService;

  beforeEach(() => {
    service = new RsvpService(mockLogger);
    jest.clearAllMocks();
  });

  it('should add a new RSVP entry', () => {
    const player: Player = { id: '1', name: 'A' };
    service.addOrUpdate(player, 'Yes');

    const confirmed = service.getConfirmedAttendees();
    expect(confirmed).toEqual([player]);
    expect(mockLogger.log).toHaveBeenCalledWith('RSVP for Alice updated to Yes');
  });

  it('should update an existing RSVP entry', () => {
    const player: Player = { id: '1', name: 'A' };
    service.addOrUpdate(player, 'Maybe');
    service.addOrUpdate(player, 'No');

    const counts = service.countStatuses();
    expect(counts).toEqual({ total: 1, confirmed: 0, declined: 1 });
  });

  it('should return correct counts', () => {
    service.addOrUpdate({ id: '1', name: 'A' }, 'Yes');
    service.addOrUpdate({ id: '2', name: 'B' }, 'No');
    service.addOrUpdate({ id: '3', name: 'C' }, 'Maybe');

    expect(service.countStatuses()).toEqual({
      total: 3,
      confirmed: 1,
      declined: 1
    });
  });
});

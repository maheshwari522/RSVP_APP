import express, { Request, Response } from 'express';
import cors from 'cors';
import { RsvpService } from './services/RsvpService';
import { ConsoleLogger } from './utils/Logger';
import { Player, RsvpStatus } from './models/RsvpTypes';

const app = express();
app.use(cors());
app.use(express.json());

const logger = new ConsoleLogger();
const rsvpService = new RsvpService(logger);

app.post('/rsvp', (req: Request, res: Response) => {
  const { id, name, status } = req.body;

  if (!id || !name || !['Yes', 'No', 'Maybe'].includes(status)) {
    return res.status(400).json({ error: 'Invalid RSVP data' });
  }

  const player: Player = { id, name };
  rsvpService.addOrUpdate(player, status as RsvpStatus);

  return res.status(200).json({ message: `RSVP for ${name} recorded as ${status}` });
});

app.get('/confirmed', (_req: Request, res: Response) => {
  return res.json(rsvpService.getConfirmedAttendees());
});

app.get('/counts', (_req: Request, res: Response) => {
  return res.json(rsvpService.countStatuses());
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

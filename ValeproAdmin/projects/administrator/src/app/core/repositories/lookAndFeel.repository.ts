import { Observable } from 'rxjs';
import { LookAndFeelModel } from '../models/lookAndFeel.model';

export abstract class LookAndFeelRepository {

  abstract getLookAndFeel(programId: number): Observable<LookAndFeelModel>;

}

import {ChangeDetectionStrategy, Component, OnInit, input, output} from '@angular/core';

@Component({
  selector: 'app-crown-caps-pagination',
  templateUrl: './crown-caps-pagination.component.html',
  styleUrls: ['./crown-caps-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrownCapsPaginationComponent implements OnInit {

  readonly pageInfo = input<{
    currentPage: number;
    pages: number;
} | null>();
  readonly loadPreviousPage = output();
  readonly loadNextPage = output();

  constructor() {
  }

  ngOnInit(): void {
  }
}

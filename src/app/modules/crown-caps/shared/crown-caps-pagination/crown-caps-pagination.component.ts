import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, input} from '@angular/core';

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
  @Output() loadPreviousPage = new EventEmitter();
  @Output() loadNextPage = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }
}

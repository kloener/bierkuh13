import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-crown-caps-pagination',
  templateUrl: './crown-caps-pagination.component.html',
  styleUrls: ['./crown-caps-pagination.component.scss']
})
export class CrownCapsPaginationComponent implements OnInit {

  @Input() pageInfo?: { currentPage: number; pages: number } | null;
  @Output() loadPreviousPage = new EventEmitter();
  @Output() loadNextPage = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }
}

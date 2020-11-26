import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Início',
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'Comercial',
        icon: 'pi pi-fw pi-chart-bar',
        items: [
          {
            label: 'Clientes',
            icon: 'pi pi-fw pi-user'
          },
          {
            label: 'Contratos',
            icon: 'pi pi-fw pi-paperclip'
          },
          {
            label: 'Pedidos de Venda',
            icon: 'pi pi-fw pi-shopping-cart'
          },
          {
            label: 'Relatórios',
            icon: 'pi pi-fw pi-file-pdf'
          },

        ]
      },
      {
        label: 'Recursos Humanos',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',

          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',

          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }
            ]
          }
        ]
      },
      {
        label: 'Financeiro',
        icon: 'pi pi-fw pi-money-bill',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              },

            ]
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        separator: true
      },
      {
        label: 'Sair',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }

}

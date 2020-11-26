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
            icon: 'pi pi-fw pi-file-pdf',
            items: [
              {
                label: 'Pedidos por cliente',
                icon: 'pi pi-fw pi-file-pdf'
              },
              {
                label: 'Contratos por cliente',
                icon: 'pi pi-fw pi-file-pdf'
              }
            ]
          },

        ]
      },
      {
        label: 'Recursos Humanos',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Ficha funcional',
            icon: 'pi pi-fw pi-user-edit',

          },
          {
            label: 'Transferências',
            icon: 'pi pi-fw pi-sort-alt',

          },
          {
            label: 'Relatórios',
            icon: 'pi pi-fw pi-file-pdf',
            items: [
              {
                label: 'Aniversariantes',
                icon: 'pi pi-fw pi-file-pdf'

              },
              {
                label: 'Listagem de funcionários',
                icon: 'pi pi-fw pi-file-pdf'

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
            label: 'Contas a pagar',
            icon: 'pi pi-fw pi-window-maximize'
          },
          {
            label: 'Contas a receber',
            icon: 'pi pi-fw pi-window-minimize'
          },
          {
            label: 'Fluxo de Caixa',
            icon: 'pi pi-fw pi-chart-line'
          },
          {
            label: 'Relatórios',
            icon: 'pi pi-fw pi-file-pdf',
            items: [
              {
                label: 'Contas a pagar',
                icon: 'pi pi-fw pi-file-pdf'

              },
              {
                label: 'Contas a receber',
                icon: 'pi pi-fw pi-file-pdf'

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

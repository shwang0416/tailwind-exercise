
import * as feather from 'feather-icons';

type Status = 'Paid' | 'Pending' | 'Unpaid';


type StatusColors = {
    [key in Status]: {
        text: string;
        background: string;
    };
};


const STATUS_COLORS:StatusColors = {
    'Paid' : {
        text:'text-green-700',
        background:'bg-green-100'
    },
    'Pending' : {
        text:'text-orange-400',
        background:'bg-orange-50'
    },
    'Unpaid' : {
        text:`text-red-700`,
        background:`bg-red-100`
    },

};

type ACTION = 'watch' | 'delete' | 'download';

const ACTION_ICONS = {
    'watch' : 'eye',
    'delete' : 'trash-2',
    'download' : 'download',
}
const headers = ['Package', 'Invoice Date', 'Status', 'Actions'];

type DataType = {
    name:string;
    price:string;
    date:string;
    status:Status;
    actions:ACTION[];
}

const data:DataType[] = [
    {name: 'name1', price: '$0.00', date:'Jan 13, 2023', status:'Paid', actions:['watch', 'delete', 'download']},
    {name: 'name2', price: '$0.00', date:'Jan 14, 2023', status:'Paid', actions:['watch', 'delete', 'download']},
    {name: 'name3', price: '$0.00', date:'Jan 15, 2023', status:'Pending', actions:['watch', 'delete', 'download']},
    {name: 'name4', price: '$0.00', date:'Jan 16, 2023', status:'Unpaid', actions:['watch', 'delete', 'download']},
];

const tableHeadersHTML = headers.map(header => `<th>${header}</th>`).join('');

const tableRows = data.map(({ name, price, date, status, actions }) => `
    <tr>
      <td class="package">
            <span >${name}</span>
            <span class="font-normal text-slate-400">${price}</span>
        </td>
        <td>${date}</td>
        <td >
            <div class="${STATUS_COLORS[status].background} rounded-2xl w-fit py-1 px-3">
                <span class="${STATUS_COLORS[status].text}">${status}</span>
            </div>
        </td>
        <td class="icons">
            <div class="flex items-center space-x-3.5 h-full">
                ${actions.map(action => `<i data-feather="${ACTION_ICONS[action]}" class="w-5 text-slate-500 hover:text-slate-700"></i>`).join('')}
            </div>

        </td>
    </tr>
    
  `).join('');
// FIXME: feather icon tailwind hover속성 안 먹히는 것 같은데, heroicons로 변경해보기

const Table = () => {

    // FIXME: tr class="pw-4" 안 먹히는데 방법 찾기
   return  `
    <table class="w-full"/>
        <thead class="bg-slate-100 h-16">
            <tr>
                ${tableHeadersHTML}
            </tr>
        </thead>
        <tbody class="tbody divide-slate-200 divide-y-2">
            ${tableRows}
        </tbody>
    </table>
    `
}

const tableHTML = Table();
document.getElementById("table-container")!.innerHTML = tableHTML;

feather.replace();
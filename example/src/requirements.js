export const requirements = [
    {
        title: 'SPACE & ENTER',
        id: 'space-and-enter',
        actions: [
            'When focus is on the accordion header of a collapsed section, expands the section.',
            'When focus is on the accordion header of an expanded section, collapses the section.',
        ],
    },
    {
        title: 'TAB',
        id: 'tab',
        actions: [
            'Moves focus to the next focusable element.',
            'All focusable elements in the accordion are included in the page Tab sequence.',
        ],
    },
    {
        title: 'SHIFT + TAB',
        id: 'shift-plus-tab',
        actions: [
            'Moves focus to the previous focusable element.',
            'All focusable elements in the accordion are included in the page Tab sequence.',
        ],
    },
    {
        title: 'DOWN ARROW',
        id: 'down-arrow',
        actions: [
            'When focus is on an accordion header, moves focus to the next accordion header.',
            'When focus is on last accordion header, moves focus to first accordion header.',
        ],
    },
    {
        title: 'UP ARROW',
        id: 'up-arrow',
        actions: [
            'When focus is on an accordion header, moves focus to the previous accordion header.',
            'When focus is on first accordion header, moves focus to last accordion header.',
        ],
    },
    {
        title: 'HOME',
        id: 'home',
        actions: [
            'When focus is on an accordion header, moves focus to the first accordion header.',
        ]
    },
    {
        title: 'END',
        id: 'end',
        actions: [
            'When focus is on an accordion header, moves focus to the last accordion header.',
        ],
    }
]
export const requirements = [
    {
        id: 'space-and-enter',
        title: 'SPACE & ENTER',
        actions: [
            'When focus is on the accordion header of a collapsed section, expands the section.',
            'When focus is on the accordion header of an expanded section, collapses the section.',
        ],
    },
    {
        id: 'tab',
        title: 'TAB',
        actions: [
            'Moves focus to the next focusable element.',
            'All focusable elements in the accordion are included in the page Tab sequence.',
        ],
    },
    {
        id: 'shift-plus-tab',
        title: 'SHIFT + TAB',
        actions: [
            'Moves focus to the previous focusable element.',
            'All focusable elements in the accordion are included in the page Tab sequence.',
        ],
    },
    {
        id: 'down-arrow',
        title: 'DOWN ARROW',
        actions: [
            'When focus is on an accordion header, moves focus to the next accordion header.',
            'When focus is on last accordion header, moves focus to first accordion header.',
        ],
    },
    {
        id: 'up-arrow',
        title: 'UP ARROW',
        actions: [
            'When focus is on an accordion header, moves focus to the previous accordion header.',
            'When focus is on first accordion header, moves focus to last accordion header.',
        ],
    },
    {
        id: 'home',
        title: 'HOME',
        actions: [
            'When focus is on an accordion header, moves focus to the first accordion header.',
        ]
    },
    {
        id: 'end',
        title: 'END',
        actions: [
            'When focus is on an accordion header, moves focus to the last accordion header.',
        ],
    }
]
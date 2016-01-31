import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

//页脚
class Footer extends Component {
  renderTodoCount() {
    const { activeCount } = this.props
    //控制item单词显示单数或复数
    const itemWord = activeCount === 1 ? 'item' : 'items'
    //如果没有todo, 则显示no items left
    return (
      <span className="todo-count">
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    )
  }

//过滤器
  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter]
    //有三种属性: 全部, 正在执行, 完成
    const { filter: selectedFilter, onShow } = this.props
    //根据属性显示相对应的集合
    return (
      <a className={classnames({ selected: filter === selectedFilter })}
         style={{ cursor: 'pointer' }}
         onClick={() => onShow(filter)}>
        {title}
      </a>
    )
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props
    if (completedCount > 0) {
      return (
        <button className="clear-completed"
                onClick={onClearCompleted} >
          Clear completed
        </button>
      )
    }
  }

  render() {
    return (
      <footer className="footer">
        {this.renderTodoCount()}
        <ul className="filters">
          {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    )
  }
}

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired
}

export default Footer

import * as d3 from 'd3'
import { portDelta } from './enum'

class Line {
	constructor(params) {
		this.container = params.container,
		this.fromItem = params.fromItem,
		this.fromPortType = params.fromPortType,
		this.targetItem = params.targetItem,
		this.targetPortType = params.targetPortType
		this.path = null

		this._createElement()
	}

	/**
	* 绘制连线
	* @ param _targetPosition 目标坐标，如果targetPosition未传直接使用targetPort的坐标
	*/
	updataPath(_targetPosition) {
		let fromPortPosition = this._getPortPosition(this.fromPortType, this.fromItem)
		let targetPosition = _targetPosition || this._getPortPosition(this.targetPortType, this.targetItem)
		let path = d3.path()
		let deltaX = fromPortPosition.x - targetPosition.x
		let bezierX = deltaX * 0.5
		// 曲率优化
		if((this.fromPortType === 'input' && deltaX > 0) || (this.fromPortType === 'output' && deltaX < 0)) {
	      bezierX = - bezierX
	    }
		path.moveTo(fromPortPosition.x, fromPortPosition.y)
		path.bezierCurveTo(fromPortPosition.x + bezierX, fromPortPosition.y, targetPosition.x - bezierX, targetPosition.y, targetPosition.x, targetPosition.y)
		this.path.attr("d", path)
	}

	/**
	* 删除连线
	*/
	remove() {
		this.path.remove()
	}

	/**
	* 创建线条元素
	* @ private
	*/
	_createElement() {
		this.path = this.container.append("path").attr('class', 'line').lower() //低头抬尾的方法
	}

	/**
    * 获取具柄的坐标
    * @param type 具柄类型（input/output）
    * @param item 元素对象
    * @returns {{x: *, y: *}}
    * @private
    */
	_getPortPosition(type, item) {
		let delta = {
			x: type === 'input' ? portDelta.INPUT_X : item.getItemWidth(),
			y: portDelta.Y
		}
		return {
			x: item.x + delta.x,
			y: item.y + delta.y
		}
	}
}

export default Line
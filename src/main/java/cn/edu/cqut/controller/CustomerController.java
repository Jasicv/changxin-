package cn.edu.cqut.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.web.bind.annotation.*;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import cn.edu.cqut.entity.Customer;
import cn.edu.cqut.service.ICustomerService;
import cn.edu.cqut.util.CrmResult;

import java.sql.Wrapper;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author HQYJ
 * @since 2020-06-03
 */
@RestController
@RequestMapping("/customer")
@CrossOrigin  //跨域请求
@Api(tags = "客户管理")
public class CustomerController {
	@Autowired
	private ICustomerService customerService;

	@ApiOperation(value = "分页返回客户信息",notes = "分页查询客户信息，默认返回第一页，每页10行。还可以根据cusName模糊查询")
	@RequestMapping(value="/customers",method = RequestMethod.GET)
//	@RequestMapping("/customers")
	public CrmResult<Customer> getAllCustomer(
			@ApiParam(value = "要查询的页码",required = true)
			@RequestParam(defaultValue = "1")
					Integer page, //page请求的页码,默认为1
			@ApiParam(value = "每页的行数",required = true)
			@RequestParam(defaultValue = "10")
					Integer limit,//limit每页的行数，默认为10
			Customer customer){
		QueryWrapper<Customer> qw = new QueryWrapper<>();
		if(customer.getCusName()!=null) {
			qw.like("cusName", customer.getCusName()); //第一个参数是字段名
		}
		Page<Customer> pageCustomer = customerService.page(
				new Page<Customer>(page,limit), qw);
		CrmResult<Customer> ret = new CrmResult<>();
		ret.setCode(0);
		ret.setMsg("");
		ret.setCount(pageCustomer.getTotal());//表里的记录总数
		ret.setData(pageCustomer.getRecords()); //这页的数据列表
		return ret;
	}

	@ApiOperation(value = "修改客户信息",notes = "修改客户信息，修改后更新客户列表内容")
	@RequestMapping(value="/updateCustomer",method = RequestMethod.GET)
	public CrmResult<Customer> updateCustomer(Customer customer){
		customerService.updateById(customer);  //根据主键更新表
		
		CrmResult<Customer> ret = new CrmResult<>();
		ret.setCode(0);
		ret.setMsg("更新客户成功");
		return ret;
	}

	@ApiOperation(value = "新增客户信息",notes = "新增客户信息，新增后更新客户列表内容")
	@RequestMapping(value="/addCustomer",method = RequestMethod.GET)
	public CrmResult<Customer> addCustomer(Customer customer){
		customerService.save(customer);
		
		CrmResult<Customer> ret = new CrmResult<>();
		ret.setCode(0);
		ret.setMsg("新增客户成功");
		return ret;
	}

	@ApiOperation(value = "删除客户信息",notes = "删除客户信息，删除后更新客户列表内容")
	@RequestMapping(value="/delCustomer",method = RequestMethod.GET)
	public CrmResult<Customer> delCustomer(String[] ids){
		customerService.removeByIds(Arrays.asList(ids));
		
		CrmResult<Customer> ret = new CrmResult<>();
		ret.setCode(0);
		ret.setMsg("删除客户成功");
		return ret;
	}
}


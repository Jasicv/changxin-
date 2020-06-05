package cn.edu.cqut.entity;

import com.baomidou.mybatisplus.extension.activerecord.Model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;

/**
 * <p>
 *
 * </p>
 *
 * @author HQYJ
 * @since 2020-06-03
 */
@ApiModel
public class Customer extends Model<Customer> {

    private static final long serialVersionUID=1L;

    @ApiModelProperty("客户编号")
    @TableId("cusNo")
    private String cusNo;

    @ApiModelProperty("客户名称")
    @TableField("cusName")
    private String cusName;

    @ApiModelProperty("客户区域")
    @TableField("cusRegion")
    private String cusRegion;

    @ApiModelProperty("客户地址编号")
    @TableField("cusAddr")
    private String cusAddr;

    @ApiModelProperty("客户网址编号")
    @TableField("cusUrl")
    private String cusUrl;

    @ApiModelProperty("客户等级")
    @TableField("cusLevel")
    private String cusLevel;

    @ApiModelProperty("客户信用等级")
    @TableField("cusCredit")
    private String cusCredit;


    public String getCusNo() {
        return cusNo;
    }

    public void setCusNo(String cusNo) {
        this.cusNo = cusNo;
    }

    public String getCusName() {
        return cusName;
    }

    public void setCusName(String cusName) {
        this.cusName = cusName;
    }

    public String getCusRegion() {
        return cusRegion;
    }

    public void setCusRegion(String cusRegion) {
        this.cusRegion = cusRegion;
    }

    public String getCusAddr() {
        return cusAddr;
    }

    public void setCusAddr(String cusAddr) {
        this.cusAddr = cusAddr;
    }

    public String getCusUrl() {
        return cusUrl;
    }

    public void setCusUrl(String cusUrl) {
        this.cusUrl = cusUrl;
    }

    public String getCusLevel() {
        return cusLevel;
    }

    public void setCusLevel(String cusLevel) {
        this.cusLevel = cusLevel;
    }

    public String getCusCredit() {
        return cusCredit;
    }

    public void setCusCredit(String cusCredit) {
        this.cusCredit = cusCredit;
    }

    @Override
    protected Serializable pkVal() {
        return this.cusNo;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "cusNo=" + cusNo +
                ", cusName=" + cusName +
                ", cusRegion=" + cusRegion +
                ", cusAddr=" + cusAddr +
                ", cusUrl=" + cusUrl +
                ", cusLevel=" + cusLevel +
                ", cusCredit=" + cusCredit +
                "}";
    }
}

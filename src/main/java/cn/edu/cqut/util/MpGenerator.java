package cn.edu.cqut.util;

import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.generator.AutoGenerator;
import com.baomidou.mybatisplus.generator.config.DataSourceConfig;
import com.baomidou.mybatisplus.generator.config.GlobalConfig;
import com.baomidou.mybatisplus.generator.config.PackageConfig;
import com.baomidou.mybatisplus.generator.config.StrategyConfig;
import com.baomidou.mybatisplus.generator.config.TemplateConfig;
import com.baomidou.mybatisplus.generator.config.converts.MySqlTypeConvert;
import com.baomidou.mybatisplus.generator.config.rules.DbColumnType;
import com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;
import com.baomidou.mybatisplus.generator.engine.FreemarkerTemplateEngine;

/**
 * <p>
 * 代码生成器演示
 * </p>
 */
public class MpGenerator {
 
    public static void main(String[] args) {
//        assert (false) : "代码生成属于危险操作，请确定配置后取消断言执行代码生成！";
        AutoGenerator mpg = new AutoGenerator();
 
        // 全局配置
        GlobalConfig gc = new GlobalConfig();
        gc.setAuthor("HQYJ");
        gc.setOutputDir("D:/javadev/workspace/cqut202005/crmservice/src/main/java"); //对应项目的src/main/java目录在磁盘上的真实路径
        gc.setFileOverride(false);// 是否覆盖同名文件，默认是false
        gc.setActiveRecord(true);// 不需要ActiveRecord特性的请改为false
        gc.setEnableCache(false);// XML 二级缓存
        gc.setBaseResultMap(true);// XML ResultMap
        gc.setBaseColumnList(false);// XML columList
        mpg.setGlobalConfig(gc);
 
        // 数据源配置
        DataSourceConfig dsc = new DataSourceConfig();
        dsc.setDbType(DbType.MYSQL);
        dsc.setDriverName("com.mysql.cj.jdbc.Driver");
        dsc.setUsername("root");
        dsc.setPassword("1234");
        dsc.setUrl("jdbc:mysql://localhost:3306/cqutcrm?useUnicode=true&characterEncoding=utf8&serverTimezone=Asia/Shanghai");
        mpg.setDataSource(dsc);
 
        // 策略配置
        StrategyConfig strategy = new StrategyConfig();
        strategy.setNaming(NamingStrategy.underline_to_camel);
        strategy.setColumnNaming(NamingStrategy.underline_to_camel);
        strategy.setInclude(new String[] { "customer" }); // 需要生成的表
        mpg.setStrategy(strategy);
 
        // 包配置
        PackageConfig pc = new PackageConfig();
        pc.setParent("cn.edu.cqut"); //项目的根包（启动类所在的包）
        pc.setController("controller"); //Controller类所在的包
        pc.setService("service"); //Service接口所在的包
        pc.setServiceImpl("service.impl"); //Service实现类所在的包
        pc.setMapper("mapper"); //Mapper接口所在的包
        pc.setEntity("entity"); //实体类所在的包
        pc.setXml("mapper.xml"); //mapper映射文件所在的包
        mpg.setPackageInfo(pc);
 
        TemplateConfig tc = new TemplateConfig();
        tc.setXml(null); //不生成xml映射文件
        mpg.setTemplate(tc);
 
        // 执行生成
        mpg.execute();
 
    }
}

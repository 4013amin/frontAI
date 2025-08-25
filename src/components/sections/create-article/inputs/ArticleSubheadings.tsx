import { AlignLeft } from "lucide-react"
import CustomTextareaController from "@/components/ui/CustomTextareaController"

const ArticleSubheadings = ({ control }: any) => (
  <>
    <CustomTextareaController
      control={control}
      name="subheadings"
      placeholder="زیرتیترها را وارد کنید"
      label="زیرتیترها (اختیاری)"
      labelIcon={<AlignLeft size={17} />}
    />

    <span className="text-sm text-muted-foreground mb-3">
      زیرتیترها را با کاما جدا کنید (مثال: مزایای هوش مصنوعی, چالش‌های پیاده‌سازی)
    </span>

  </>
)

export default ArticleSubheadings
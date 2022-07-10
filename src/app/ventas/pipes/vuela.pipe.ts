import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {
    transform(value: boolean, args?: any): string {
        return value ? 'vuela' : 'no vuela';
    }
}